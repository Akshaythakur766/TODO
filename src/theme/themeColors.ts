const defaultTheme = {
  light: {
    "--primary": "oklch(0.21 0.006 285.885)", // Light mode primary color
    "--primary-foreground": "oklch(0.985 0 0)", // Light mode primary foreground
    "--ring": "oklch(0.705 0.015 286.067)", // Light mode ring
    "--sidebar-primary": "oklch(0.21 0.006 285.885)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.985 0 0)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.705 0.015 286.067)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.18 0.006 285.885)", // Dark mode primary color
    "--primary-foreground": "oklch(0.97 0.015 0)", // Dark mode primary foreground
    "--ring": "oklch(0.18 0.02 286.067)", // Dark mode ring
    "--sidebar-primary": "oklch(0.18 0.006 285.885)", // Dark mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.97 0.015 0)", // Dark mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.18 0.02 286.067)", // Dark mode sidebar ring
  },
};

const redTheme = {
  light: {
    "--primary": "oklch(0.637 0.237 25.331)", // Light mode primary color
    "--primary-foreground": "oklch(0.971 0.013 17.38)", // Light mode primary foreground
    "--ring": "oklch(0.637 0.237 25.331)", // Light mode ring
    "--sidebar-primary": "oklch(0.637 0.237 25.331)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.971 0.013 17.38)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.637 0.237 25.331)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.637 0.237 25.331)", // Dark mode primary color (no change for red)
    "--primary-foreground": "oklch(0.971 0.013 17.38)", // Dark mode primary foreground (no change for red)
    "--ring": "oklch(0.637 0.237 25.331)", // Dark mode ring (no change for red)
    "--sidebar-primary": "oklch(0.637 0.237 25.331)", // Dark mode sidebar primary (no change for red)
    "--sidebar-primary-foreground": "oklch(0.971 0.013 17.38)", // Dark mode sidebar primary foreground (no change for red)
    "--sidebar-ring": "oklch(0.637 0.237 25.331)", // Dark mode sidebar ring (no change for red)
  },
};

const roseTheme = {
  light: {
    "--primary": "oklch(0.645 0.246 16.439)", // Light mode primary color
    "--primary-foreground": "oklch(0.969 0.015 12.422)", // Light mode primary foreground
    "--ring": "oklch(0.645 0.246 16.439)", // Light mode ring
    "--sidebar-primary": "oklch(0.645 0.246 16.439)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.969 0.015 12.422)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.645 0.246 16.439)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.645 0.246 16.439)", // Dark mode primary color (no change for rose)
    "--primary-foreground": "oklch(0.969 0.015 12.422)", // Dark mode primary foreground (no change for rose)
    "--ring": "oklch(0.645 0.246 16.439)", // Dark mode ring (no change for rose)
    "--sidebar-primary": "oklch(0.645 0.246 16.439)", // Dark mode sidebar primary (no change for rose)
    "--sidebar-primary-foreground": "oklch(0.969 0.015 12.422)", // Dark mode sidebar primary foreground (no change for rose)
    "--sidebar-ring": "oklch(0.645 0.246 16.439)", // Dark mode sidebar ring (no change for rose)
  },
};

const greenTheme = {
  light: {
    "--primary": "oklch(0.44 0.65 111.853)",
    "--primary-foreground": "oklch(0.99 0.01 125.339)",
    "--ring": "oklch(0.44 0.65 111.853)",
    "--sidebar-primary": "oklch(0.44 0.65 111.853)",
    "--sidebar-primary-foreground": "oklch(0.99 0.01 125.339)",
    "--sidebar-ring": "oklch(0.44 0.65 111.853)",
  },
  dark: {
    "--primary": "oklch(0.44 0.65 111.853)",
    "--primary-foreground": "oklch(0.99 0.01 125.339)",
    "--ring": "oklch(0.44 0.65 111.853)",
    "--sidebar-primary": "oklch(0.44 0.65 111.853)",
    "--sidebar-primary-foreground": "oklch(0.99 0.01 125.339)",
    "--sidebar-ring": "oklch(0.44 0.65 111.853)",
  }
};


const orangeTheme = {
  light: {
    "--primary": "oklch(0.55 0.78 31.872)", // Light mode primary color
    "--primary-foreground": "oklch(0.98 0.02 29.154)", // Light mode primary foreground
    "--ring": "oklch(0.55 0.78 31.872)", // Light mode ring
    "--sidebar-primary": "oklch(0.55 0.78 31.872)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.98 0.02 29.154)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.55 0.78 31.872)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.55 0.78 31.872)", // Dark mode primary color (no change for orange)
    "--primary-foreground": "oklch(0.98 0.02 29.154)", // Dark mode primary foreground (no change for orange)
    "--ring": "oklch(0.55 0.78 31.872)", // Dark mode ring (no change for orange)
    "--sidebar-primary": "oklch(0.55 0.78 31.872)", // Dark mode sidebar primary (no change for orange)
    "--sidebar-primary-foreground": "oklch(0.98 0.02 29.154)", // Dark mode sidebar primary foreground (no change for orange)
    "--sidebar-ring": "oklch(0.55 0.78 31.872)", // Dark mode sidebar ring (no change for orange)
  },
};

const violetTheme = {
  light: {
    "--primary": "oklch(0.25 0.55 268.928)", // Light mode primary color
    "--primary-foreground": "oklch(0.95 0.04 269.832)", // Light mode primary foreground
    "--ring": "oklch(0.25 0.55 268.928)", // Light mode ring
    "--sidebar-primary": "oklch(0.25 0.55 268.928)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.95 0.04 269.832)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.25 0.55 268.928)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.25 0.55 268.928)", // Dark mode primary color (no change for violet)
    "--primary-foreground": "oklch(0.95 0.04 269.832)", // Dark mode primary foreground (no change for violet)
    "--ring": "oklch(0.25 0.55 268.928)", // Dark mode ring (no change for violet)
    "--sidebar-primary": "oklch(0.25 0.55 268.928)", // Dark mode sidebar primary (no change for violet)
    "--sidebar-primary-foreground": "oklch(0.95 0.04 269.832)", // Dark mode sidebar primary foreground (no change for violet)
    "--sidebar-ring": "oklch(0.25 0.55 268.928)", // Dark mode sidebar ring (no change for violet)
  },
};

const blueTheme = {
  light: {
    "--primary": "oklch(0.3 0.6 217.051)", // Light mode primary color
    "--primary-foreground": "oklch(0.98 0.03 225.357)", // Light mode primary foreground
    "--ring": "oklch(0.3 0.6 217.051)", // Light mode ring
    "--sidebar-primary": "oklch(0.3 0.6 217.051)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.98 0.03 225.357)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.3 0.6 217.051)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.3 0.6 217.051)", // Dark mode primary color (no change for blue)
    "--primary-foreground": "oklch(0.98 0.03 225.357)", // Dark mode primary foreground (no change for blue)
    "--ring": "oklch(0.3 0.6 217.051)", // Dark mode ring (no change for blue)
    "--sidebar-primary": "oklch(0.3 0.6 217.051)", // Dark mode sidebar primary (no change for blue)
    "--sidebar-primary-foreground": "oklch(0.98 0.03 225.357)", // Dark mode sidebar primary foreground (no change for blue)
    "--sidebar-ring": "oklch(0.3 0.6 217.051)", // Dark mode sidebar ring (no change for blue)
  },
};

const yellowTheme = {
  light: {
    "--primary": "oklch(0.5 0.7 72.347)", // Light mode primary color
    "--primary-foreground": "oklch(0.99 0.02 65.826)", // Light mode primary foreground
    "--ring": "oklch(0.5 0.7 72.347)", // Light mode ring
    "--sidebar-primary": "oklch(0.5 0.7 72.347)", // Light mode sidebar primary
    "--sidebar-primary-foreground": "oklch(0.99 0.02 65.826)", // Light mode sidebar primary foreground
    "--sidebar-ring": "oklch(0.5 0.7 72.347)", // Light mode sidebar ring
  },
  dark: {
    "--primary": "oklch(0.5 0.7 72.347)", // Dark mode primary color (no change for yellow)
    "--primary-foreground": "oklch(0.99 0.02 65.826)", // Dark mode primary foreground (no change for yellow)
    "--ring": "oklch(0.5 0.7 72.347)", // Dark mode ring (no change for yellow)
    "--sidebar-primary": "oklch(0.5 0.7 72.347)", // Dark mode sidebar primary (no change for yellow)
    "--sidebar-primary-foreground": "oklch(0.99 0.02 65.826)", // Dark mode sidebar primary foreground (no change for yellow)
    "--sidebar-ring": "oklch(0.5 0.7 72.347)", // Dark mode sidebar ring (no change for yellow)
  },
};

export {
  blueTheme,
  defaultTheme,
  greenTheme,
  orangeTheme,
  redTheme,
  roseTheme,
  violetTheme,
  yellowTheme,
};
