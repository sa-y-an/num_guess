// const cont = document.querySelector(".container");

let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.fromTo(".container", { height: "0%" }, { height: "100%" })
  .from("#game", {
    y: 50,
    opacity: 0,
    stagger: 0.6,
  })
  .from(".min-class", {
    x: 150,
    opacity: 0,
  })
  .from(".max-class", {
    x: -150,
    opacity: 0,
  });
