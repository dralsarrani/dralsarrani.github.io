/* Danah Alsarrani — portfolio
 * Hero typing animation (looping), dynamic year
 */

(() => {
  "use strict";

  // ----- dynamic year stamp -----
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ----- hero typing effect (looping) -----
  const typedEl = document.getElementById("hero-typed");
  if (typedEl) {
    const lines = [
      "cat hello.txt",
      "whoiam",
      "Danah Alsarrani — junior developer · AI & LLMs · Java",
    ];
    let lineIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const typeSpeed = 45;
    const deleteSpeed = 25;
    const pauseAfterType = 1400;
    const pauseAfterDelete = 350;

    function tick() {
      const current = lines[lineIdx];
      
      if (!deleting) {
        // Typing
        charIdx++;
        typedEl.textContent = current.slice(0, charIdx);
        
        if (charIdx === current.length) {
          // Finished typing this line
          deleting = true;
          setTimeout(tick, pauseAfterType);
          return;
        }
        setTimeout(tick, typeSpeed);
      } else {
        // Deleting
        charIdx--;
        typedEl.textContent = current.slice(0, charIdx);
        
        if (charIdx === 0) {
          // Finished deleting - move to next line or loop back
          deleting = false;
          lineIdx = (lineIdx + 1) % lines.length; // Loop back to first line
          setTimeout(tick, pauseAfterDelete);
          return;
        }
        setTimeout(tick, deleteSpeed);
      }
    }
    setTimeout(tick, 600);
  }
})();