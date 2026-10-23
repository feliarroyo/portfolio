// utils/sound.ts

export type SoundKey =
  | "click"
  | "daySwitch"
  | "nightSwitch"
  | "open"
  | "close"
  | "language"
  | "chest";

// Map logical names to audio file paths in /public
export const SOUNDS: Record<SoundKey, string> = {
  click: "/sounds/click.wav",
  daySwitch: "/sounds/day-switch.wav",
  nightSwitch: "/sounds/night-switch.wav",
  open: "/sounds/open.wav",
  close: "/sounds/close.wav",
  language: "/sounds/language.wav",
  chest: "/sounds/chest.wav",
};

// In-memory cache for audio instances
const audioCache = new Map<string, HTMLAudioElement>();

// Local storage key for SFX state
const SFX_STORAGE_KEY = "portfolio_sfx_enabled";

/**
 * Check if sound effects are enabled.
 * Defaults to false per the planned toggleable SFX behavior.
 */
export function isSfxEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SFX_STORAGE_KEY) === "true";
}

/**
 * Enable or disable sound effects globally.
 */
export function setSfxEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SFX_STORAGE_KEY, String(enabled));
}

/**
 * Preload a sound file into cache so it plays with zero latency on first action.
 */
export function preloadSound(sound: SoundKey | string): void {
  if (typeof window === "undefined") return;

  const src = sound in SOUNDS ? SOUNDS[sound as SoundKey] : sound;
  if (!audioCache.has(src)) {
    const audio = new Audio(src);
    audio.preload = "auto";
    audioCache.set(src, audio);
  }
}

// 3-voice pool for rapid dialogue beeps without stutter or clipping
const VOICE_POOL_SIZE = 3;
let dialogueVoicePool: HTMLAudioElement[] = [];
let voiceIndex = 0;

interface PlaySoundOptions {
  volume?: number;      // 0.0 to 1.0 (defaults to 0.4)
  forcePlay?: boolean;  // Ignore the SFX toggle check if set to true
}

/**
 * Plays a sound effect by registered key or relative path.
 */
export function playSound(
  sound: SoundKey | string,
  options: PlaySoundOptions = {}
): void {
  if (typeof window === "undefined") return;

  const { volume = 0.4, forcePlay = false } = options;

  // Check if SFX are enabled unless specifically bypassed
  if (!forcePlay && !isSfxEnabled()) {
    return;
  }

  const src = sound in SOUNDS ? SOUNDS[sound as SoundKey] : sound;

  try {
    let audio = audioCache.get(src);

    if (!audio) {
      audio = new Audio(src);
      audioCache.set(src, audio);
    }

    // Reset timestamp so rapid clicks don't swallow playback
    audio.currentTime = 0;
    audio.volume = Math.max(0, Math.min(1, volume));

    audio.play().catch((err) => {
      // Browser autoplay policy prevents playback until first interaction
      console.debug(`Sound playback failed for "${src}":`, err);
    });
  } catch (err) {
    console.debug(`Audio initialization failed for "${src}":`, err);
  }
}

/**
 * Plays a quick dialogue blip with subtle pitch jitter.
 */
export function playDialogueBlip(
  src = "/sounds/talk.mp3",
  baseVolume = 0.12
): void {
  if (typeof window === "undefined" || !isSfxEnabled()) return;

  // Initialize pool on first use (client-side only)
  if (dialogueVoicePool.length === 0) {
    dialogueVoicePool = Array.from({ length: VOICE_POOL_SIZE }, () => {
      const audio = new Audio(src);
      audio.preload = "auto";
      return audio;
    });
  }

  const voice = dialogueVoicePool[voiceIndex];
  voiceIndex = (voiceIndex + 1) % VOICE_POOL_SIZE;

  voice.currentTime = 0;
  voice.volume = baseVolume;

  // Retro pitch jitter: random pitch between 0.94x and 1.06x
  voice.playbackRate = 0.94 + Math.random() * 0.12;

  voice.play().catch(() => {
    // Gracefully catch autoplay restrictions
  });
}