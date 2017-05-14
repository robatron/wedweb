// Generate a navigation item
const createNavItem = (route, displayName, component) => ({route, displayName, component});

// Navigation items
export const navItems = [
  createNavItem('/', 'Home', 'HomePage.js')
];
