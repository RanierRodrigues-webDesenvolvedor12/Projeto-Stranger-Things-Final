import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

// Registro dos plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Configuração do ScrollSmoother
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true
});

gsap.from(".hero", {
    opacity: 0,
    duration: 2
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
 })

 gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
 })

 gsap.from(".header",{
    opacity: 0,
    duration: 1,
    y: -60
 })
