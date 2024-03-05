function locomotiveAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  const tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      const loader = document.querySelector("#line1-part1 h5");
      let grow = 0;
      setInterval(() => {
        if (grow < 100) {
          grow++;
          loader.innerHTML = grow;
        } else {
          loader.innerHTML = grow;
        }
      }, 28);
    },
  });

  //Now animation  (initial to final state)
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  //To hide loader div after  4s
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2.6,
  });
  // To remove loader after pervious animation is complete
  tl.to("#loader", {
    display: "none",
  });

  //To display page1 i.e hero section after loader 4s is complete (final to initial state)
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration: 0.6,
    ease: Power4,
  });

  tl.from("nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2, #hero4 h1", {
    y: 140,
    stagger: 0.2,
  });

  tl.from(
    "#hero1 , #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");
}

function playPauseVideo() {
  let videoContainer = document.querySelector("#video-container");
  const video = document.querySelector("#video-container video");
  const cursor = document.querySelector("#video-cursor");
  let flag = 0;

  // Function to toggle play/pause
  function togglePlayPause() {
    if (flag === 0) {
      video.play();
      video.style.opacity = 1;
      cursor.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      cursor.innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  }

  // Mouse events
  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", (dets) => {
      gsap.to(".mousefollower", {
        opacity: 0,
      });
      gsap.to("#video-cursor", {
        left: dets.x - 590,
        y: dets.y - 300,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to("#video-cursor", {
      left: "70%",
      top: "-15%",
    });
  });

  // Click event (for both mouse and touch)
  videoContainer.addEventListener("click", togglePlayPause);

  // Touch events
  videoContainer.addEventListener("touchstart", function(event) {
    event.preventDefault(); // Prevent default touch behavior
    
    togglePlayPause(); // Toggle play/pause on touch
  });
}

function sheryAnimation() {
  Shery.imageEffect("#img1", {
    style: 5,
    config: {
      a: { value: 1.6, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7241195453907675 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.34, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  Shery.imageEffect("#img2 ", {
    style: 5,
    config: {
      a: { value: 1.37, range: [0, 30] },
      b: { value: 0.76, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7105195528333405 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  Shery.imageEffect("#img3", {
    style: 5,
    config: {
      a: { value: 0.69, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7105195528333405 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.2, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  Shery.imageEffect("#img4", {
    style: 5,
    config: {
      a: { value: 0.92, range: [0, 30] },
      b: { value: 0.91, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7105195528333405 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.21, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  Shery.imageEffect("#img5", {
    style: 5,
    config: {
      a: { value: 0.92, range: [0, 30] },
      b: { value: 0.91, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7105195528333405 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.21, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  Shery.imageEffect("#img6", {
    style: 5,
    config: {
      a: { value: 0.92, range: [0, 30] },
      b: { value: 0.91, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7105195528333405 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.21, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.45, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

function flagAnimation() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.querySelector("#hero3").addEventListener("mouseenter", () => {
    gsap.to("#flag", {
      opacity: 1,
    });
  });

  document.querySelector("#hero3").addEventListener("mouseleave", () => {
    gsap.to("#flag", {
      opacity: 0,
    });
  });
}

function footerAnimation() {
  var clutter = "";
  var clutter2 = "";
  document
    .querySelector("footer h1")
    .textContent.split("")
    .forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
  document.querySelector("footer h1").innerHTML = clutter;

  document
    .querySelector("footer h2")
    .textContent.split("")
    .forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`;
    });
  document.querySelector("footer h2").innerHTML = clutter2;

  document
    .querySelector("#footer-text")
    .addEventListener("mouseenter", function () {
      gsap.to("footer h1 span", {
        opacity: 0,
        stagger: 0.05,
      });
      gsap.to("footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1,
      });
    });
  document
    .querySelector("#footer-text")
    .addEventListener("mouseleave", function () {
      gsap.to("footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
      });
      gsap.to("footer h2 span", {
        opacity: 0,
        stagger: 0.05,
      });
    });
}

function fixedScrollerBugOnMobile() {
  const open = document.querySelector("#open-modal");
  const closeModalBtn = document.querySelector("#close");
  const modal = document.querySelector(".modal-container");

  // Check if the screen size is less than 650px
  const mediaQuery = window.matchMedia("(max-width: 649px)");

  // Open modal
  const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  };

  // Add event listeners if the screen size is less than 650px
  if (mediaQuery.matches) {
    open.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
  }
}


loadingAnimation();
playPauseVideo();
fixedScrollerBugOnMobile();
cursorAnimation();
locomotiveAnimations();
sheryAnimation();
flagAnimation();
footerAnimation();
