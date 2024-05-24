window.addEventListener("DOMContentLoaded", (event) => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Video Animation
  const video = document.querySelector(".video");
  gsap.fromTo(
    video,
    { scale: 1.2 },
    {
      scale: 0.8, // Adjust scale to the desired size
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: true, // Remove this line in production
      },
      transformOrigin: "center center",
      ease: "power1.out",
    },
  );

  // CMS Items Animation (Project Items)
  const projectItems = document.querySelectorAll(".project-items");

  // Loop through each CMS item (Project Item) and create an animation
  projectItems.forEach((item) => {
    // Initial state (hidden and translated down)
    gsap.set(item, { opacity: 0, y: 100 });

    // Create the scroll-triggered animation
    gsap.to(item, {
      scrollTrigger: {
        trigger: item, // Trigger the animation when the item is in view
        start: "top 80%", // Animation starts when the top of the item is at 80% of the viewport height
        end: "bottom 60%", // Animation ends when the bottom of the item is at 60% of the viewport height
        toggleActions: "play none none reverse", // On enter, play the animation. On leave, reverse the animation
      },
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 1, // Animation duration in seconds
      ease: "power4.out", // Easing function
    });
  });

  // CMS Items Animation (Article Items)
  const articleItems = document.querySelectorAll(".article-items");

  // Loop through each CMS item (Article Item) and create an animation
  articleItems.forEach((item) => {
    // Initial state (hidden and translated down)
    gsap.set(item, { opacity: 0, y: 100 });

    // Create the scroll-triggered animation
    gsap.to(item, {
      scrollTrigger: {
        trigger: item, // Trigger the animation when the item is in view
        start: "top 80%", // Animation starts when the top of the item is at 80% of the viewport height
        end: "bottom 60%", // Animation ends when the bottom of the item is at 60% of the viewport height
        toggleActions: "play none none reverse", // On enter, play the animation. On leave, reverse the animation
      },
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 1, // Animation duration in seconds
      ease: "power4.out", // Easing function
    });
  });

  // Process section animation
  $(".home-scroll_section").each(function (index) {
    let childTriggers = $(this).find(".home-scroll_text-item");
    let childTargets = $(this).find(".home-scroll_img-item");
    // Switch active class
    function makeItemActive(index) {
      childTriggers.removeClass("is-active");
      childTargets.removeClass("is-active");
      childTriggers.eq(index).addClass("is-active");
      childTargets.eq(index).addClass("is-active");
    }
    makeItemActive(0);
    // Create triggers
    childTriggers.each(function (index) {
      ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onToggle: (isActive) => {
          if (isActive) {
            makeItemActive(index);
          }
        },
      });
    });
  });

  // Text Animation
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });

    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 100%",
      onEnter: () => timeline.play(),
    });
  }

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.8 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 75%", // Trigger earlier
        end: "bottom 50%", // Adjust end point accordingly
        scrub: true,
        markers: true, // Remove or comment this line in production
      },
    });
    tl.from($(this).find(".word"), {
      opacity: 0.2,
      duration: 0.3,
      ease: "power1.out",
      stagger: { each: 0.8 },
    });
  });

  $("[letters-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: -120,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.7 },
    });

    createScrollTrigger($(this), tl);
  });

  // Service Divs Animation
  const serviceDivs = document.querySelectorAll(".service");

  // Loop through each service div and create an animation
  serviceDivs.forEach((service) => {
    // Initial state (hidden and translated down)
    gsap.set(service, { opacity: 0, y: 100 });

    // Create the scroll-triggered animation
    gsap.to(service, {
      scrollTrigger: {
        trigger: service, // Trigger the animation when the service div is in view
        start: "top 80%", // Animation starts when the top of the service div is at 80% of the viewport height
        end: "bottom 60%", // Animation ends when the bottom of the service div is at 60% of the viewport height
        toggleActions: "play none none reverse",
      },
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 1, // Animation duration in seconds
      ease: "power4.out", // Easing function
    });
  });

  gsap.set("[text-split]", { opacity: 1 });
});
