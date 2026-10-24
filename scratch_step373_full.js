  // ==========================================================================
  // Persistent Clock Scroll Transition: Text -> Clock (Center) -> Clock (Upside) + Remote
  // ==========================================================================
  function onScroll() {
    if (!scrollStoryTrack || !heroTextContainer || !clockOverlayLayer || !remoteOverlayLayer) return;

    const scrollTop = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(scrollStoryTrack.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const vh = window.innerHeight;

    // ------------------------------------------------------------------------
    // STAGE 1: Hero Text -> Kerala Quartz Clock Center (progress 0.00 to 0.28)
    // ------------------------------------------------------------------------
    if (progress <= 0.28) {
      // Phase 1: Text fades out and drifts upward
      const textProgress = Math.min(progress / 0.18, 1);
      const textOpacity = Math.max(1 - textProgress, 0);
      const textTranslateY = -textProgress * 60;
      heroTextContainer.style.opacity = textOpacity.toFixed(3);
      heroTextContainer.style.transform = `translate(-50%, calc(-50% + ${textTranslateY}px)) scale(${1 - textProgress * 0.08})`;
      heroTextContainer.style.pointerEvents = textOpacity < 0.2 ? 'none' : 'auto';

      // Clock is fully persistent: scales up into center hero position
      const clockIn = Math.min(progress / 0.22, 1);
      const clockScale = 0.82 + (0.18 * clockIn);
      const clockOpacity = Math.min(0.25 + (0.75 * clockIn), 1);
      clockOverlayLayer.style.opacity = clockOpacity.toFixed(3);
      clockOverlayLayer.style.transform = `translate(-50%, -50%) scale(${clockScale.toFixed(3)})`;
      clockOverlayLayer.style.pointerEvents = 'auto';

      // Remote is hidden below
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.transform = 'translate(-50%, 60%) scale(0.65)';
      remoteOverlayLayer.classList.remove('active-interact');
    }
    // ------------------------------------------------------------------------
    // STAGE 2 -> STAGE 3: Clock moves UPSIDE in its place + Remote enters downside
    // Clock remains 100% PERSISTENT (opacity 1.0) and replicates time changes
    // ------------------------------------------------------------------------
    else {
      // Text is completely gone
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.pointerEvents = 'none';

      // Progress normalized from 0.28 to 1.00
      const t = Math.min((progress - 0.28) / 0.72, 1);
      // Smoothstep organic easing
      const ease = t * t * (3 - 2 * t);

      // CLOCK: Persistent (opacity = 1.0), shifts smoothly to UPSIDE position
      clockOverlayLayer.style.opacity = '1';
      clockOverlayLayer.style.pointerEvents = 'auto';

      // Responsive upside shift: adapts smoothly to viewport height
      const maxClockShiftY = Math.min(vh * 0.27, 215);
      const clockShiftY = -ease * maxClockShiftY;
      const clockScale = 1.0 - (ease * 0.44); // scales to ~0.56 authentic wall size
      clockOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${clockShiftY.toFixed(1)}px)) scale(${clockScale.toFixed(3)})`;

      // REMOTE: Glides in from below and settles right under the upside clock
      const remoteOpacity = Math.min(t / 0.45, 1);
      const maxRemoteShiftY = Math.min(vh * 0.18, 142);
      const remoteShiftY = ease * maxRemoteShiftY;
      const remoteGlideY = (1 - ease) * 80;
      const remoteScale = 0.68 + (0.14 * ease); // scales to ~0.82
      remoteOverlayLayer.style.opacity = remoteOpacity.toFixed(3);
      remoteOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${(remoteShiftY + remoteGlideY).toFixed(1)}px)) scale(${remoteScale.toFixed(3)})`;

      // Enable pointer interaction once remote is sufficiently visible
      if (remoteOpacity >= 0.65) {
        remoteOverlayLayer.classList.add('active-interact');
      } else {
        remoteOverlayLayer.classList.remove('active-interact');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll(); // initial state

  // Clock interactive click to announce time
  if (wallClockEl) {
    wallClockEl.style.cursor = 'pointer';
    wallClockEl.title = 'Click to hear current time';
    wallClockEl.addEventListener('click', () => {
      triggerIrFlash();
      playRemoteClickSound();
      speakCurrentTime();
    });
  }

  // Smooth scroll CTA
  if (scrollCta) {
    scrollCta.addEventListener('click', () => {
      const maxScroll = Math.max(scrollStoryTrack.offsetHeight - window.innerHeight, 1);
      window.scrollTo({ top: maxScroll * 0.90, behavior: 'smooth' });
    });
  }

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }