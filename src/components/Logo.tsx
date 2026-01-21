import Image from "next/image";

interface LogoProps {
  size?: "small" | "large";
}

export default function Logo({ size = "small" }: LogoProps) {
  const sizeClasses = size === "large" ? "w-40 h-14" : "w-32 h-12";
  return (
    <div className={`${sizeClasses} relative`}>
      <Image
        src="/mjs_logo_text.png"
        alt="MJ Solution Indonesia"
        fill
        className="object-contain"
      />
    </div>
  );
}
