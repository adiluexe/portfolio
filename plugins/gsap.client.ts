import { gsap } from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollSmoother", ScrollSmoother);
  nuxtApp.provide("ScrollTrigger", ScrollTrigger);
});
