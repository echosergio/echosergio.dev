import 'bootstrap/dist/css/bootstrap.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    console.log(`# IntersectionObserver is polyfilled!`);
    return import(`intersection-observer`);
  }
};
