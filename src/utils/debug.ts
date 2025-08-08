// Debug utilities for development
export const isDev = import.meta.env?.DEV ?? false;

// Enhanced console logging with app context
export const logger = {
  info: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.log(`[Preact App] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.warn(`[Preact App] ${message}`, ...args);
    }
  },
  error: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.error(`[Preact App] ${message}`, ...args);
    }
  },
  route: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.log(`[Router] ${message}`, ...args);
    }
  },
};

// Performance timing utility
export const perfTimer = (label: string) => {
  if (isDev) {
    console.time(`[Perf] ${label}`);
    return () => console.timeEnd(`[Perf] ${label}`);
  }
  return () => {};
};

// Component render tracker
export const trackRender = (componentName: string) => {
  if (isDev) {
    logger.info(`${componentName} rendered`);
  }
};
