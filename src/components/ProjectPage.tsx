"use client";

import Image from "next/image";
import Logo from "./Logo";
import DemoButton from "./DemoButton";
import { useState } from "react";

interface ProjectPageProps {
  projectNumber: string;
  subtitle: string;
  title: string;
  description: string;
  demoLink: string;
  demoLinkDescription: string;
  images: string[];
}

export default function ProjectPage({
  projectNumber,
  subtitle,
  title,
  description,
  demoLink,
  demoLinkDescription,
  images,
}: ProjectPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleSliderClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="h-screen w-full flex items-center snap-start bg-white relative overflow-hidden">
      {/* Logo - responsive positioning */}
      <div className="absolute top-8 left-8 md:left-20 z-10">
        <Logo size="small" />
      </div>

      {/* Overlay - hidden on mobile */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
        <Image
          src="/overlay.png"
          alt="Overlay Decoration"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex flex-col md:flex-row px-6 md:px-20 items-center justify-between gap-8 md:gap-20 lg:gap-10 z-10 relative py-24 md:py-0">
        <div className="w-full md:w-1/2 lg:w-1/4 order-1 md:order-2 mt-16 md:mt-0">
          {/* Mobile */}
          <div className="block md:hidden">
            <div
              className="relative w-full h-48 shadow-[0_4px_50px_0_rgba(175,175,175,0.2)] overflow-hidden cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover p-2 select-none"
              />
            </div>

            {/* Slider */}
            <div className="flex gap-2 justify-center mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSliderClick(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "w-8 bg-brand-primary"
                      : "w-8 bg-gray-300"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full md:h-44 lg:h-48 shadow-[0_4px_50px_0_rgba(175,175,175,0.2)] overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover p-3"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col w-full md:max-w-[280px] lg:max-w-[450px] md:h-[600px] order-2 md:order-1">
          <div className="flex flex-col justify-center md:justify-end lg:space-y-2 h-full">
            <p className="text-brand-font text-xs md:text-sm font-normal">
              {projectNumber}
            </p>
            <p className="text-brand-primary text-xs md:text-sm font-normal">
              {subtitle}
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-brand-primary">
              {title}
            </h2>
            <p className="text-brand-font text-sm md:text-base leading-relaxed">
              {description}
            </p>
            <div className="flex w-auto gap-3 items-center pt-2">
              <DemoButton link={demoLink} />
              <p className="flex text-brand-font text-sm md:text-base items-center">
                {demoLinkDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
