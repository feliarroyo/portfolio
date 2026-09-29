const techColorMap: Record<string, string> = {
  'java': 'bg-orange-500 text-white',
  'firebase': 'bg-orange-500 text-white',
  'unity': 'bg-gray-800 text-white',
  'csharp': 'bg-purple-500 text-white',
  'rasa': 'bg-red-500 text-white',
  'python': 'bg-yellow-500 text-black',
  'pyside6': 'bg-cyan-400 text-black',
  'postgresql': 'bg-blue-700 text-white',
  'vuejs': 'bg-green-400 text-black',
  'vercel': 'bg-green-800 text-white',
  'springboot': 'bg-green-500 text-white',
  'nextjs': 'bg-black text-white',
  'react': 'bg-blue-500 text-white',
  'typescript': 'bg-blue-600 text-white',
  'tailwindcss': 'bg-teal-400 text-black',
  'yacc': 'bg-yellow-400 text-black',
  'masm32': 'bg-blue-800 text-white',
  'pandas': 'bg-purple-600 text-white',
  'scikitlearn': 'bg-blue-400 text-black',
  // Fallback style for undefined technologies
  default: 'bg-gray-200 text-gray-800 border-gray-400', 
};

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  // Grab the specific colors or fallback to the default
  const colorClasses = techColorMap[name] || techColorMap.default;

  // Paste the exact Tailwind classes currently used in ProjectOverlay here
  const baseClasses = "px-2 py-1 text-xs select-none inline-block";

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      {name}
    </span>
  );
}