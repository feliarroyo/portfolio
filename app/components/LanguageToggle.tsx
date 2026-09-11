interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  return (
    <div className={`${className}`}>
      <p>Language Toggle</p>
    </div>
  );
}