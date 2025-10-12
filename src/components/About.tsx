"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import ataurImg from "@/assets/ataur.jpg"; 

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://i.ibb.co/ymmwmxSd/Screenshot-19.png')",
  }}>
      {/* Container with constrained width and centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Flex Container: Reversing order for Text on Left, Image on Right */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 lg:gap-0">
          
          {/* 1. TEXT AREA (Left Side on Desktop) */}
          <div className="w-full md:w-1/2 md:px-0 px-20">
            <div className=" mx-auto md:mx-0">
              <p className="text-base font-medium uppercase tracking-widest text-[#23C5F5] mb-2">
                Hello, I’m
              </p>
              
              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-black">
                ATAUR Rahman
              </h2>
              <p className="mt-1 text-2xl text-black font-semibold">
                Full-stack Developer
              </p>

              {/* About Paragraph (Adjusted for better readability) */}
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                I am <b className="">Ataur Rahman</b> a web developer with 3+ years of experience in WordPress. I specialize in creating responsive, accessible, and performance-optimized web interfaces using Next.js, React, TypeScript, and Tailwind CSS. My work focuses on clean code, user-centered design, and production-ready deployment best practices.
              </p>

              {/* Tech Stack Tags (Styled for Dark Mode) */}
              <ul className="flex flex-wrap gap-3 mt-6">
                <li className="px-4 py-1 bg-neutral-900 text-sm font-medium text-[#23C5F5] rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                  Wordpress
                </li>
                <li className="px-4 py-1 bg-neutral-900 text-sm font-medium text-[#23C5F5] rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                  React
                </li>
                <li className="px-4 py-1 bg-neutral-900 text-sm font-medium text-[#23C5F5] rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                  JavaScript
                </li>
                <li className="px-4 py-1 bg-neutral-900 text-sm font-medium text-[#23C5F5] rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                  Tailwind CSS
                </li>
              </ul>

              {/* Action Buttons (Professional Styling) */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#23C5F5] hover:bg-[#1b90b4] text-white font-semibold rounded-lg text-base transition duration-300 shadow-md shadow-indigo-500/50"
                >
                  View Projects &rarr;
                </a>
                <a
                  href="https://next-js-portfolio-five-omega.vercel.app/resume1.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-600 text-neutral-500 hover:border-neutral-500 hover:text-white font-semibold rounded-lg text-base transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* 2. IMAGE AREA (Right Side on Desktop) */}
          <div className="w-full md:w-1/2 flex md:justify-center">
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg relative md:pl-0 pl-20 cursor-pointer">
              <PixelatedCanvas
                src={typeof ataurImg === "string" ? ataurImg : ataurImg.src ?? ""}
                width={420}
                height={520}
                cellSize={2}
                dotScale={0.9}
                shape="square"
                // Using a very dark color for the background, close to black
                backgroundColor="#050505" 
                dropoutStrength={0.12}
                interactive
                distortionStrength={1.5}
                distortionRadius={70}
                distortionMode="swirl"
                followSpeed={0.4}
                jitterStrength={3}
                jitterSpeed={3}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.18}
                // Enhanced border and shadow
                className="rounded-xl border border-neutral-700 shadow-2xl shadow-neutral-900/50" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}