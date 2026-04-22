# Task 23 - AppName Landing Page

## What I Built
A responsive landing page for AppName with:
- Sticky navigation bar
- Hero section with "Build Amazing Products Faster"
- Start Free Trial and Watch Demo buttons
- WaterDemo placeholder
- 3 feature cards with hover effects
- Footer with links
- Fixed chat widget

## How to Run
1. Download all files (index.html, script.js, README.md)
2. Put them in the same folder
3. Double-click index.html
4. It opens in your browser

## Responsive Breakpoints I Used

| Breakpoint | Device | What Changes |
|------------|--------|--------------|
| 375px | iPhone SE | Single column, hamburger menu |
| 768px | iPad | 3 column features, footer row |
| 1024px | Desktop | Hero side by side, larger text |

## Positioning Types Used

| Position | Where | Why |
|----------|-------|-----|
| sticky | Navigation bar | Stays at top when scrolling down |
| fixed | Chat widget | Always visible in bottom-right corner |
| relative | (implied in Tailwind) | Used for absolute positioning context |

## Responsive Classes Used

| Class | What it does |
|-------|--------------|
| `flex flex-col lg:flex-row` | Stack on mobile, row on desktop |
| `grid grid-cols-1 md:grid-cols-3` | 1 column mobile, 3 columns tablet+ |
| `flex flex-col sm:flex-row` | Stack mobile, row tablet+ |
| `hidden md:flex` | Hide on mobile, show on tablet+ |

## Hover Effects Added

| Element | Effect |
|---------|--------|
| Feature cards | Lift up (`-translate-y-1`) + larger shadow |
| Buttons | Color change |
| Links | Color change |

## JavaScript Features

| Feature | What it does |
|---------|--------------|
| Mobile menu toggle | Shows/hides menu when clicking hamburger |
| Close menu on link click | Menu closes automatically after navigation |
| Time-based chat messages | Different greeting based on time of day |
| Console logging | Helps debug responsive issues |
| Error handling | Checks if elements exist before using |

## Problems I Faced and Fixed

**Problem 1:** Mobile menu wasn't showing
- **Fix:** Added `hidden` class to start, then toggle with JavaScript

**Problem 2:** Menu stayed open after clicking link
- **Fix:** Added JavaScript to close menu when any link is clicked

**Problem 3:** Chat button always said same message
- **Fix:** Used `new Date().getHours()` to show different messages

**Problem 4:** Didn't know if responsive was working
- **Fix:** Added `window.onresize` to log width in console

## What I Learned

1. `sticky` needs `top-0` to work properly
2. `flex-col` stacks items, `flex-row` puts them side by side
3. `lg:` prefix means "on large screens"
4. `md:` prefix means "on medium screens"
5. `hover:` prefix adds effects when mouse hovers
6. `transition` makes hover effects smooth
7. Always check if elements exist before using them in JavaScript
8. Console.log helps debug what's happening

## Files in This Project

| File | Purpose |
|------|---------|
| index.html | HTML structure with Tailwind classes |
| script.js | JavaScript for menu toggle, chat, debugging |
| README.md | This documentation |

