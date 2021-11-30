/**
 * On your div in HTML:
 * with JS add click event,
 * Once you click:
 */

// Make it circle after 2s
// Make it red after 0.5s
// Make it square after 0.25s
// Make it purple after 0.3s
// Fade out after 0.5s

const go = document.querySelector(".go");

go.addEventListener("click", (e) => {
  const el = e.currentTarget;

  // Make it circle after 2s
  setTimeout(() => {
    el.classList.add("circle");

    // Make it red after 0.5s
    setTimeout(() => {
      el.classList.add("red");

      // Make it square after 0.25s
      setTimeout(() => {
        el.classList.remove("circle");

        // Make it purple after 0.3s
        setTimeout(function () {
          el.classList.remove("red");
          el.classList.add("purple");

          // Fade out after 0.5s
          setTimeout(function () {
            el.classList.add("fadeOut");
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});

// EVENT LOOP !!!!!! butinai perziureti savaitgali!!
//https://www.youtube.com/watch?v=8aGhZQkoFbQ

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
