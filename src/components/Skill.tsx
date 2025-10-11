import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

const IMAGES_ROW_A = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://i.ibb.co.com/D7v7BFd/20200926171128-removebg-preview.png",
    "https://vitejs.dev/logo.svg",
    "https://www.svgrepo.com/show/331488/mongodb.svg",
    "https://i.ibb.co.com/vxkywj1/images-1-removebg-preview.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968766.png",
    "https://wpforms.com/wp-content/uploads/2024/08/Elementor-Logo-Symbol-Red.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmRKWlGc5tCTTBuK6VySwAOOOGzVKekDqkA&s",
    "https://i.ibb.co.com/RvcYs7W/Node-js-logo-svg-removebg-preview.png"

  
];

const IMAGES_ROW_B = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://wpforms.com/wp-content/uploads/2024/08/Elementor-Logo-Symbol-Red.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmRKWlGc5tCTTBuK6VySwAOOOGzVKekDqkA&s",
    "https://i.ibb.co.com/RvcYs7W/Node-js-logo-svg-removebg-preview.png",
        "https://i.ibb.co.com/D7v7BFd/20200926171128-removebg-preview.png",
    "https://vitejs.dev/logo.svg",
    "https://www.svgrepo.com/show/331488/mongodb.svg",
    "https://i.ibb.co.com/vxkywj1/images-1-removebg-preview.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968766.png",
];

export function Skill() {
  return (
    <div>
      <h1 className="text-black md:py-10 pt-5 text-center md:text-5xl text-xl font-bold">Technical Expertise</h1>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
            {IMAGES_ROW_A.map((src, idx) => (
              <img
                key={idx}
                src={`${src}`}
                alt="Unsplash sample"
                width={120}
                height={80}
                loading="lazy"
                decoding="async"
                className="mx-10 inline-block h-20 w-20 rounded-lg object-contain shadow-sm"
              />
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
            {IMAGES_ROW_B.map((src, idx) => (
              <img
                key={idx}
                src={`${src}`}
                alt="Unsplash sample"
                width={120}
                height={80}
                loading="lazy"
                decoding="async"
                className="mx-10 inline-block h-20 w-20 rounded-lg object-contain shadow-sm"
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </div>
  );
}
