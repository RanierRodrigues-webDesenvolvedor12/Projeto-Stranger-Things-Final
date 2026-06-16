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

 gsap.from(".card",{
    opacity: 0,
    duration: 1,
    stagger: .2,
    y: 100,
    filter: "blur(20px)",
    scrollTrigger: {
        trigger: ".secaoCidade",
        scrub: 1,
        start: "0% 80%",
        end: "90% 70%"
    }
 })

 gsap.from(".secaoObrigado ul li",{
    opacity: 0,
    stagger: .1,
    x: 40,
    filter: "blur(10px)",
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        scrub: 2,
        start: "0% 80%",
        end: "100% 50%",
        markers: true
    }
 })

 gsap.from("footer", {
    y: "-30%",
    immediateRender:false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
 })
