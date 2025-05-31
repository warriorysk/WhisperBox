import {
  MessageCircle,
  Image as ImageIcon,
  Camera,
  Users,
  Send,
  FileText,
  Mic,
  Phone,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

// Spiral path for snake animation
const animationPath = [0, 1, 2, 5, 8, 7, 6, 3, 4];

const iconComponents = [
  MessageCircle,
  ImageIcon,
  Camera,
  Users,
  Send,
  FileText,
  Mic,
  Phone,
  Share2,
];

const AuthImagePattern = ({ title, subtitle }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % animationPath.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const highlighted = [
    animationPath[step],
    animationPath[(step + 1) % animationPath.length],
    animationPath[(step + 2) % animationPath.length],
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 px-8 py-6">
      <div
        className="max-w-md w-full text-center p-6 rounded-2xl border border-white/10 
        bg-white/10 backdrop-blur-md shadow"
      >
        <div className="grid grid-cols-3 gap-3 mb-6">
          {iconComponents.map((Icon, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl flex items-center justify-center transition-all duration-500
              ${
                highlighted.includes(i)
                  ? "bg-primary text-white scale-110 shadow-md"
                  : "bg-white/10 text-white/50"
              }`}
            >
              <Icon className="size-6" />
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-white/70 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
