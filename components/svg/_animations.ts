import gsap from "gsap";

export const lineDrawAnimation = () => {
  const lineDraw = gsap.timeline({
    defaults: {
      drawSVG: "100%",
      visibility: "visible",
      ease: "power1.out",
      delay: 0.5,
    },
  });
  lineDraw.fromTo(
    "#mask_USA_1",
    { drawSVG: "0" },
    {
      duration: 2,
    }
  );
  lineDraw.fromTo(
    "#mask_Denmark",
    { drawSVG: "0" },
    {
      duration: 1,
    },
    0.3
  );
  lineDraw.fromTo(
    "#mask_Canada",
    { drawSVG: "0" },
    {
      duration: 2,
    },
    0.5
  );
  lineDraw.fromTo(
    "#mask_USA_2",
    { drawSVG: "0" },
    {
      duration: 1.75,
    },
    1.2
  );
  lineDraw.fromTo(
    "#mask_Spain",
    { drawSVG: "0" },
    {
      duration: 1,
    },
    1.4
  );
  lineDraw.fromTo(
    "#mask_SA",
    { drawSVG: "0" },
    {
      duration: 1.5,
    },
    1.6
  );
  lineDraw.fromTo(
    "#mask_Africa",
    { drawSVG: "0" },
    {
      duration: 2,
    },
    0.75
  );
  lineDraw.fromTo(
    "#mask_Russia",
    { drawSVG: "0" },
    {
      duration: 1.5,
    },
    0.6
  );
  lineDraw.fromTo(
    "#mask_China",
    { drawSVG: "0" },
    {
      duration: 1.75,
    },
    0.9
  );
  lineDraw.fromTo(
    "#mask_Australia",
    { drawSVG: "0" },
    {
      duration: 2,
    },
    1.8
  );
};

export const pinRevealAnimation = () => {
  const pinReveal = gsap.timeline({
    defaults: {
      ease: "elastic.out(1, 0.4)",
      delay: 0.5,
    },
  });
  pinReveal.fromTo(
    "#Pin_Australia",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    3.8
  );
  pinReveal.fromTo(
    "#Pin_China",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.65
  );
  pinReveal.fromTo(
    "#Pin_Russia",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.1
  );
  pinReveal.fromTo(
    "#Pin_Denmark",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    1.3
  );
  pinReveal.fromTo(
    "#Pin_Spain",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.4
  );
  pinReveal.fromTo(
    "#Pin_Africa",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.75
  );
  pinReveal.fromTo(
    "#Pin_SA",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    3.1
  );
  pinReveal.fromTo(
    "#Pin_Canada",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.5
  );
  pinReveal.fromTo(
    "#Pin_USA_1",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2
  );
  pinReveal.fromTo(
    "#Pin_USA_2",
    { y: -50, opacity: 0 },
    { duration: 2, y: 0, opacity: 1 },
    2.95
  );
};
