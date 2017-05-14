// Generate a navigation item
const createNavItem = (route, displayName, component) => ({route, displayName, component});

// Navigation items
const navItems = [
  createNavItem('/', 'Home', 'HomePage.js')
];

console.log(navItems);
