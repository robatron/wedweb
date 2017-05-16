import HomePage from './HomePage';
import WhenAndWherePage from './WhenAndWherePage';
import WhatToExpectPage from './WhatToExpectPage';
import AccommodationsPage from './AccommodationsPage';
import GiftsPage from './GiftsPage';
import RsvpPage from './RsvpPage';

// Generate a page item
const createPageItem = (route, displayName, pageComponent) => ({route, displayName, pageComponent});

/*
Rough site map:

- Home
  - Intro
  - Date

- When / Where
  - When
  - Where
  - Parking (sparse!)

- What to Expect
  - Attire (examples with celebs?)
  - Timeline

- Accommodations
  - Transit

- Gifts

- RSVP
 */
const pages = [
  createPageItem('/',               'Home',           HomePage),
  createPageItem('/when-and-where', 'When & Where',   WhenAndWherePage),
  createPageItem('/what-to-expect', 'What to Expect', WhatToExpectPage),
  createPageItem('/accommodations', 'Accommodations', AccommodationsPage),
  createPageItem('/gifts',          'Gifts',          GiftsPage),
  createPageItem('/rsvp',           'RSVP',           RsvpPage)
];

export default pages
