/* ========================================
   MOBILE NAVIGATION
========================================= */

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");


if (navToggle && navMenu) {

  navToggle.addEventListener("click", () => {

    const isOpen =
      navMenu.classList.toggle("active");

    navToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  const navLinks =
    navMenu.querySelectorAll("a");


  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ========================================
   CURRENT YEAR
========================================= */

const currentYear =
  document.getElementById("current-year");


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}


/* ========================================
   HEADER SCROLL SHADOW
========================================= */

const header =
  document.querySelector(".header");


if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

      header.style.boxShadow =
        "0 8px 30px rgba(122, 0, 25, 0.08)";

    } else {

      header.style.boxShadow =
        "none";

    }

  });

}


/* ========================================
   LIGHTBOX GALLERY
========================================= */

const galleryCards =
  document.querySelectorAll(".gallery-card");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightbox-image");

const lightboxClose =
  document.getElementById("lightbox-close");

const lightboxPrev =
  document.getElementById("lightbox-prev");

const lightboxNext =
  document.getElementById("lightbox-next");


let currentImageIndex = 0;


/* Only run gallery code if gallery exists */

if (
  galleryCards.length > 0 &&
  lightbox &&
  lightboxImage &&
  lightboxClose &&
  lightboxPrev &&
  lightboxNext
) {

  const galleryImages =
    Array.from(galleryCards).map((card) => {

      return (
        card.dataset.image ||
        card.querySelector("img")?.src
      );

    });


  /* ========================================
     SHOW IMAGE
  ========================================= */

  function showImage(index) {

    currentImageIndex = index;

    lightboxImage.src =
      galleryImages[currentImageIndex];

  }


  /* ========================================
     OPEN LIGHTBOX
  ========================================= */

  function openLightbox(index) {

    showImage(index);

    lightbox.classList.add("active");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "lightbox-open"
    );

  }


  /* ========================================
     CLOSE LIGHTBOX
  ========================================= */

  function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "lightbox-open"
    );

  }


  /* ========================================
     NEXT IMAGE
  ========================================= */

  function showNextImage() {

    currentImageIndex =
      (currentImageIndex + 1) %
      galleryImages.length;

    showImage(currentImageIndex);

  }


  /* ========================================
     PREVIOUS IMAGE
  ========================================= */

  function showPreviousImage() {

    currentImageIndex =
      (
        currentImageIndex -
        1 +
        galleryImages.length
      ) %
      galleryImages.length;

    showImage(currentImageIndex);

  }


  /* ========================================
     GALLERY IMAGE CLICK
  ========================================= */

  galleryCards.forEach(
    (card, index) => {

      card.addEventListener(
        "click",
        () => {

          openLightbox(index);

        }
      );

    }
  );


  /* ========================================
     CONTROLS
  ========================================= */

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );


  lightboxNext.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      showNextImage();

    }
  );


  lightboxPrev.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      showPreviousImage();

    }
  );


  /* ========================================
     CLICK DARK BACKGROUND TO CLOSE
  ========================================= */

  lightbox.addEventListener(
    "click",
    (event) => {

      if (event.target === lightbox) {

        closeLightbox();

      }

    }
  );


  /* ========================================
     KEYBOARD CONTROLS
  ========================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        !lightbox.classList.contains(
          "active"
        )
      ) {

        return;

      }


      if (event.key === "Escape") {

        closeLightbox();

      }


      if (event.key === "ArrowRight") {

        showNextImage();

      }


      if (event.key === "ArrowLeft") {

        showPreviousImage();

      }

    }
  );

}