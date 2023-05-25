import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const img = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl;
  });


  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col text-title font-semibold uppercase leading-[1.1em] text-accent-300">
        <h1>Hey, I&apos;m Huy</h1>
        <h1 className="font-outline-4 text-transparent">Hey, I&apos;m Huy</h1>
        <h1>Hey, I&apos;m Huy</h1>
      </div>
      <div className="absolute mx-auto w-1/2 rounded-md">
        <img
          ref={img}
          className="  rounded-md opacity-50 "
          src="src/assets/images/heroimg.webp"
          alt="Abstract cubic background image"
        />
      </div>
    </div>
  );
}
