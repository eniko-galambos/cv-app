import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const initSmoothScroller = () => {
  const scroller = document.querySelector('.scroller');

  const bodyScrollBar = Scrollbar.init(scroller, {
    delegateTo: document,
  });

  ScrollTrigger.scrollerProxy('.scroller', {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scroller });

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    bodyScrollBar.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
    });
  }
};

export { initSmoothScroller };
export default { initSmoothScroller };
