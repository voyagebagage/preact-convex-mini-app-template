import { useEffect } from "preact/hooks";
import { logger, trackRender } from "../utils/debug";

export function About() {
  trackRender("About");

  useEffect(() => {
    logger.route("Navigated to About page");
    logger.info("About component mounted");
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us on this page.</p>
      <p>
        <small>Debug logging active in console</small>
      </p>
    </div>
  );
}
