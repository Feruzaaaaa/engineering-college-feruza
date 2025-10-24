# Engineering College - Static Multi-Page Website

## Project Overview

Engineering College is a comprehensive, responsive, static website designed to provide prospective students with information about programs, admissions, student life, and contact details. The website features modern UI/UX design, full accessibility compliance, and interactive JavaScript enhancements.

**Live URL:** `https://yourusername.github.io/engineering-college/`

**Repository:** `https://github.com/yourusername/engineering-college`

---

## Page Map & Information Architecture

The website consists of 6 main pages with clear, logical navigation:

### 1. **Home** (`index.html`)
- Hero section with call-to-action buttons
- Quick statistics showcase
- Featured programs overview
- Responsive design for all screen sizes

### 2. **About & Programs** (`about.html`)
- Institution mission and vision
- Core values presentation
- Comprehensive program listings (undergraduate and graduate)
- **Interactive program filter** (JavaScript Feature #1)

### 3. **Admissions** (`admissions.html`)
- Admissions overview and deadlines
- Step-by-step application process
- Admission requirements for undergraduate and graduate programs
- Tuition and fees table
- **Interactive FAQ accordion** (Bootstrap component)

### 4. **Student Life** (`student-life.html`)
- Campus life overview
- Student clubs and organizations
- Latest news and events
- **Read More/Less toggle** (JavaScript Feature #2)

### 5. **Contact** (`contact.html`)
- Contact information cards
- **Contact form** with validation and anti-spam measure
- Office hours table
- Campus map placeholder

### 6. **Registration** (`registration.html`)
- **Advanced registration form** with comprehensive validation
- Real-time field validation
- Password strength requirements
- Terms and conditions modal
- Success confirmation state

---

## Features Implemented

### Core Requirements

✅ **6 HTML5 pages** with semantic structure  
✅ **Fixed top navigation bar** on all pages with active states  
✅ **Mobile-responsive design** using Bootstrap 5  
✅ **Two forms:**
- Advanced Registration Form (11+ fields, complex validation)
- Basic Contact Form (anti-spam, success/error states)

### Interactive JavaScript Features

#### 1. **Program Filter (About Page)**
- Filter programs by category (All, Undergraduate, Graduate)
- Smooth fade-in/fade-out transitions
- Active button state management
- Progressive enhancement friendly

#### 2. **Read More/Less Toggle (Student Life Page)**
- Expand/collapse additional content for news items
- Button text and style changes on toggle
- Smooth content reveal animation
- Enhances content discovery without overwhelming users

### Additional Interactive Features
- Real-time form validation with visual feedback
- Password match validation
- Smooth scroll for anchor links
- Navbar shadow effect on scroll
- Form reset functionality
- Keyboard accessibility (ESC to close modals)

---

## Accessibility Features

✅ **Semantic HTML5** elements (nav, section, article, footer)  
✅ **Proper heading hierarchy** (h1-h6)  
✅ **Form labels** associated with inputs  
✅ **Alt text** for images (placeholders used in demo)  
✅ **ARIA attributes** (aria-current, aria-controls, aria-expanded, aria-label)  
✅ **Keyboard navigation** fully supported  
✅ **Focus visible** states with custom styling  
✅ **Color contrast** meeting WCAG AA standards  
✅ **Responsive design** for screen readers

---

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (variables), Flexbox, Grid
- **Bootstrap 5.3.0**: Responsive layout, components, utilities
- **JavaScript (ES6+)**: Form validation, interactive features, DOM manipulation
- **Git & GitHub**: Version control
- **GitHub Pages**: Deployment

---

## Design System

### Color Palette
- Primary: #0d6efd (Bootstrap Blue)
- Secondary: #6c757d (Gray)
- Success: #198754 (Green)
- Danger: #dc3545 (Red)
- Light: #f8f9fa
- Dark: #212529

### Typography Scale
- Base: 1rem (16px)
- Small: 0.875rem
- Large: 1.125rem
- Headings: 1.25rem - 2.5rem (responsive)

### Spacing Scale
- XS: 0.25rem
- SM: 0.5rem
- MD: 1rem
- LG: 1.5rem
- XL: 2rem
- XXL: 3rem
- XXXL: 4rem

### Shadows
- Small: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)
- Medium: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)
- Large: 0 1rem 3rem rgba(0, 0, 0, 0.175)

---

## Responsive Breakpoints

The website is fully responsive across all common device sizes:

- **Mobile Small**: < 576px
- **Mobile**: 576px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px

### Mobile-First Approach
- Layouts adapt gracefully from small to large screens
- Navigation collapses to hamburger menu on mobile
- Forms stack vertically on small screens
- Images and content reflow appropriately
- Touch-friendly button sizes (minimum 44x44px)

---

## Form Validation Details

### Registration Form Validation
- **Full Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Required, pattern validation (555-123-4567)
- **Date of Birth**: Required, date input
- **Desired Program**: Required, select dropdown
- **Intended Intake**: Required, date input
- **Study Mode**: Required, radio buttons
- **Scholarship Interest**: Optional, select dropdown
- **Password**: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- **Confirm Password**: Required, must match password
- **Terms Agreement**: Required, checkbox

### Contact Form Validation
- **Name**: Required
- **Email**: Required, valid email format
- **Subject**: Required, select dropdown
- **Message**: Required, textarea
- **Anti-spam**: Required, math question (5 + 3 = 8)

### Validation Features
- Client-side validation with HTML5 and JavaScript
- Real-time feedback (invalid/valid states)
- Inline error messages
- Success confirmation after submission
- Form reset functionality
- Keyboard accessible (Tab, Enter, Escape)

---

## File Structure

```
engineering-college/
├── index.html                 # Home page
├── about.html                 # About & Programs page
├── admissions.html            # Admissions information
├── student-life.html          # Student life & news
├── contact.html               # Contact form & info
├── registration.html          # Student registration form
├── css/
│   └── styles.css            # Custom CSS styles
├── js/
│   └── main.js               # JavaScript functionality
├── images/                    # Image assets (if any)
├── README.md                  # Project documentation
└── .gitignore                # Git ignore file
```

---

## Known Limitations

1. **Image Placeholders**: SVG placeholders are used instead of actual images. In production, these should be replaced with optimized images.

2. **Backend Functionality**: Forms use simulated submissions (setTimeout). A real application would require backend API integration.

3. **Data Persistence**: No data is actually stored. Registration and contact submissions show success messages but don't persist data.

4. **Map Integration**: Campus map uses a placeholder. A real implementation would use Google Maps or similar service.

5. **Search Functionality**: No search feature implemented. Could be added as future enhancement.

6. **Browser Compatibility**: Tested on modern browsers (Chrome, Firefox, Safari, Edge). May have limited support on older browsers.

---

## Credits & Attribution

### Frameworks & Libraries
- **Bootstrap 5.3.0** - MIT License - https://getbootstrap.com/
- Framework used for responsive grid, components, and utilities

### Fonts
- System font stack (Segoe UI, Tahoma, Geneva, Verdana, sans-serif)
- No external fonts to optimize loading performance

### Icons & Images
- SVG placeholders generated inline (no external dependencies)
- Emoji icons used for simple visual elements

### Code References
- Form validation patterns inspired by MDN Web Docs
- Accessibility best practices from W3C WAI guidelines

### Content
- All text content is original and created for this project
- No copyrighted content used

---

## How to Navigate the Site

### For Desktop Users:
1. Use the fixed navigation bar at the top to access any page
2. Click "Register Now" in the navigation to go directly to the registration form
3. Explore program filters on the About & Programs page
4. Read full articles on the Student Life page using "Read More" buttons
5. Use the contact form to send inquiries

### For Mobile Users:
1. Tap the hamburger menu (☰) in the top-right to open navigation
2. Swipe or scroll through content easily
3. All forms are touch-friendly with large tap targets
4. Accordion sections expand/collapse for easier navigation

### For Keyboard Users:
1. Use Tab to navigate between interactive elements
2. Press Enter/Space to activate buttons and links
3. Use arrow keys in select dropdowns
4. Press Escape to close modals

---

## Setup & Installation

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/engineering-college.git
cd engineering-college
```

2. **Open in browser:**
- Simply open `index.html` in your web browser
- Or use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. **Access the site:**
- Navigate to `http://localhost:8000`

### GitHub Pages Deployment

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Enable GitHub Pages:**
- Go to repository Settings
- Navigate to Pages section
- Select source: "Deploy from branch"
- Select branch: "main" and folder: "/ (root)"
- Click Save

3. **Access live site:**
- URL will be: `https://yourusername.github.io/engineering-college/`
- May take a few minutes to deploy

---

## Testing Checklist

### Functionality Testing
- ✅ All navigation links work correctly
- ✅ Active navigation states highlight current page
- ✅ Program filter shows/hides programs correctly
- ✅ Read More/Less toggles expand/collapse content
- ✅ Registration form validates all fields
- ✅ Contact form validates and shows success message
- ✅ Password validation checks strength and match
- ✅ Anti-spam field validates correct answer
- ✅ Forms reset properly when reset button clicked
- ✅ Modals open and close correctly

### Responsive Testing
- ✅ Mobile (320px - 767px): Layout stacks, hamburger menu works
- ✅ Tablet (768px - 991px): Layout adjusts, readable content
- ✅ Desktop (992px+): Full layout with all features visible
- ✅ No horizontal scrolling on any breakpoint

### Accessibility Testing
- ✅ Keyboard navigation works throughout
- ✅ Screen reader compatible (tested with NVDA/VoiceOver)
- ✅ Color contrast passes WCAG AA standards
- ✅ Focus indicators visible on all interactive elements
- ✅ Form labels properly associated
- ✅ Semantic HTML structure

### Browser Testing
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## Future Enhancements

Potential improvements for future versions:

1. **Content Management**: Integration with a CMS for easier content updates
2. **Backend Integration**: Real form submissions with database storage
3. **User Accounts**: Student portal with login functionality
4. **Search**: Site-wide search functionality
5. **Blog**: News and articles section with pagination
6. **Gallery**: Photo gallery of campus and events
7. **Live Chat**: Support chat widget
8. **Analytics**: Google Analytics integration
9. **Internationalization**: Multi-language support
10. **Performance**: Image optimization, lazy loading, code minification

---

## Performance Optimization

### Current Optimizations
- Minimal external dependencies (only Bootstrap)
- CSS variables for consistent theming
- Efficient JavaScript (no unnecessary libraries)
- No external font loading (system fonts)
- Inline SVG for icons (no HTTP requests)

### Recommendations for Production
- Minify CSS and JavaScript files
- Compress images (WebP format recommended)
- Enable caching headers
- Use CDN for Bootstrap
- Implement lazy loading for images
- Add service worker for offline capability

---

## Version History

**v1.0.0** - Initial Release
- 6 fully functional pages
- Responsive design
- Two interactive JavaScript features
- Form validation
- Accessibility compliant

---

## Contact & Support

For questions or issues regarding this project:

- **Developer**: [Your Name]
- **Email**: your.email@example.com
- **GitHub**: @yourusername
- **Project Issues**: https://github.com/yourusername/engineering-college/issues

---

## License

This project is created for educational purposes as part of a web development midterm exam.

© 2025 Engineering College Website Project. All rights reserved.

---

## Acknowledgments

Thank you to the course instructors and teaching assistants for providing clear requirements and guidance throughout this project.