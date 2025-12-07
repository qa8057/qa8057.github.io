const btn = document.getElementById("backToTop");

    // Show button after scrolling 300px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.classList.add("show");        // makes it visible
      } else {
        btn.classList.remove("show");     // hides it again
      }
    });

    // Smooth scroll back to top when clicked
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });