// ...existing code...
"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function About() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text area */}
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase text-neutral-500 mb-2">
              Hello, I’m
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              DEV ATAUR
            </h2>
            <p className="mt-2 text-lg text-neutral-300 font-semibold">
              Full-stack Developer
            </p>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Ami ekjon full-stack web developer. Next.js, React, TypeScript
              ebong Tailwind CSS diye ami responsive, accessible ebong
              performance-optimized web interface toyri kori. Amar kaj-er moddhe
              clean code, user-focused design, ebong production-ready deployment
              best practice gulo priority.
            </p>

            <ul className="flex flex-wrap gap-2 mt-4">
              <li className="px-3 py-1 bg-neutral-800 text-sm text-neutral-200 rounded-full">
                Next.js
              </li>
              <li className="px-3 py-1 bg-neutral-800 text-sm text-neutral-200 rounded-full">
                React
              </li>
              <li className="px-3 py-1 bg-neutral-800 text-sm text-neutral-200 rounded-full">
                TypeScript
              </li>
              <li className="px-3 py-1 bg-neutral-800 text-sm text-neutral-200 rounded-full">
                Tailwind CSS
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-4 py-2 border border-neutral-700 text-neutral-200 hover:border-neutral-600 rounded-md text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image / PixelatedCanvas */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <PixelatedCanvas
                src="https://assets.aceternity.com/manu-red.png"
                width={420}
                height={520}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#0b0b0b"
                dropoutStrength={0.35}
                interactive
                distortionStrength={2.5}
                distortionRadius={70}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={3}
                jitterSpeed={3}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.18}
                className="rounded-xl border border-neutral-800 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
