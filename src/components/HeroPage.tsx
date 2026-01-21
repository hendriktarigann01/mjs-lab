import Image from "next/image";
import Logo from "./Logo";

export default function HeroPage() {
  return (
    <section className="relative isolation-isolate h-screen w-full flex items-center justify-center bg-white snap-start">
      {/* Logo */}
      <div className="absolute top-8 z-40">
        <Logo size="large" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <Image
          src="/overlay.png"
          alt="Overlay Decoration"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center relative w-full h-screen px-8">
        <div className="z-10 relative translate-y-50 md:translate-y-25">
          <p className="text-brand-primary text-xl font-light">Lab</p>
          <h1 className="text-3xl md:text-7xl font-medium text-brand-primary">
            MJ Solution Indonesia
          </h1>
        </div>
        <div className="relative w-72 md:w-140 h-72 md:h-140 translate-y-3/4 md:translate-y-8 z-20">
          <Image
            src="/scientist.png"
            alt="Scientist Character"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
