const { gsap, ScrollTrigger, ScrollSmoother, SplitText } = window;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Configuração do ScrollSmoother
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 5,
  effects: true
});

function animarPagina(){

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
        end: "100% 50%"
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

 // Selecionando todos elementos do split
 const grupoTextoSplit = document.querySelectorAll(".textoSplit");

 grupoTextoSplit.forEach((TextoUnicoSplit) => {
   const split = SplitText.create(TextoUnicoSplit, {
   type: "lines, words, chars",
   mask: "lines"
 })

 gsap.from(split.chars,{
  y: 50,                  // Distância um pouco maior para evidenciar o movimento
    opacity: 0,
    stagger: 0.03,          // Stagger um pouco mais rápido entre as letras
    duration: 0.8,          // Duração maior (super importante para ficar premium)
    ease: "power3.out",
    filter: "blur(10px)",     // Começa rápido e desacelera suavemente no final
    scrollTrigger: {
      trigger: TextoUnicoSplit,
      start: "100% 85%",      // A animação começa quando o topo do texto chega a 85% da tela
      // onEnter, onLeave, onEnterBack, onLeaveBack
   }
})
 })

 // Animando texto com splitText nas seções com scroll

const grupoTextoSplitScroll = document.querySelectorAll(".textoSplitScroll");

 grupoTextoSplitScroll.forEach((TextoUnicoSplitScroll) => {
   const split = SplitText.create(TextoUnicoSplitScroll, {
   type: "lines, words, chars",
   mask: "lines"
 })

 gsap.from(split.chars,{
   y: 40,
   stagger: 0.03,
   duration: 0.3,
   opacity: 0,
   scrollTrigger: {
      trigger: TextoUnicoSplitScroll,
      scrub: 1.5,
        start: "0% 80%",
        end: "90% 70%"
   }
})
 })
}

 

 // Animando o PRELOADER
// Criamos uma timeline para seguir uma animação de cada vez 

 const tl = gsap.timeline({
      onComplete(){
         animarPagina(),
         gsap.to("#preLoader",{
            opacity: 0,
            onComplete(){
               gsap.to("#preLoader",{
                  display: "none"
               })
            }
         })
      }
   });

   tl.to("#preLoader path",{
      duration: 2,
      strokeDashoffset: 0,
   })

   tl.to("#preLoader path", {
      fill: "rgb(168, 19, 19)",
      duration: 1,
      strokeDashoffset: 0
   })

