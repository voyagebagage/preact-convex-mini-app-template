import { useEffect } from "preact/hooks";
import { logger, trackRender, perfTimer } from "../utils/debug";

export function Contact() {
  trackRender("Contact");

  useEffect(() => {
    const endTimer = perfTimer("Contact page load");
    logger.route("Navigated to Contact page");
    logger.info("Contact component mounted");

    // Simulate some work and measure it
    setTimeout(() => {
      endTimer();
    }, 100);
  }, []);

  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us here.</p>
      <p>
        <small>Performance timing demo - check console</small>
      </p>
    </div>
  );
}
