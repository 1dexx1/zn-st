
export function getTitleAnimation(delay = 0) {
  return {
    initial: { opacity: 0, translateY: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, translateY: 0, filter: 'blur(0px)', transition: { duration: 0.3, delay } },
  };
}

export function getZoomInAnimation(delay = 0) {
  return {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 0.2, delay } },
  };
}
