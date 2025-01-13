# Vrit Technologies Internship Task A

## Project Overview

This project is part of the Vrit Technologies internship selection process and demonstrates my ability to create a visually appealing and interactive web application using modern web development practices. The application showcases a carousel of cards with responsive and dynamic visual effects.

## Live Demo
A live demo of the project can be found [here](https://vrit-technologies-frontend-internship-task-a-xv9a.vercel.app/).

---

## Features

1. **Interactive Carousel**: A visually engaging carousel of cards with interactive scaling and opacity effects.
2. **Responsive Design**: Fully responsive layout, optimized for devices of various screen sizes.
3. **Performance Optimizations**: Efficient CSS animations and optimized DOM manipulation for a smooth user experience.
4. **Modern UI/UX Design**: Use of a glassmorphic design with subtle animations and gradient backgrounds for a modern aesthetic.

---

## Technology Choices and Rationale

### **HTML**
- Serves as the structure for the web application.
- Semantic elements used for better accessibility and SEO.

### **CSS**
- Implements a glassmorphic design for modern UI aesthetics.
- Responsive styles using media queries ensure compatibility across devices.
- Smooth animations using CSS transitions and keyframes for better user experience.

### **JavaScript**
- Enables interactivity by dynamically updating the DOM.
- Event listeners ensure efficient interaction handling.

### **Design Principles**
- **Reusability**: CSS classes and JavaScript functions are designed to be modular and reusable.
- **Performance**: Lightweight animations and DOM manipulation for optimal performance.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor (e.g., VS Code, Sublime Text)

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Vrit-Technologies-Frontend-Internship-Task-A.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Vrit-Technologies-Frontend-Internship-Task-A
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

4. Alternatively, serve the project using a local server (e.g., Live Server in VS Code).

---

## Code Structure

### **File Organization**
- **index.html**: The main HTML file containing the structure of the application.
- **styles.css**: Contains all styles for layout, animations, and responsiveness.
- **script.js**: Implements interactivity and dynamic behaviors for the carousel.

### **Highlights of the Code**
1. **Glassmorphic Design**:
   ```css
   .card {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(15px);
       border-radius: 16px;
   }
   ```
2. **Responsive Design**:
   ```css
   @media (max-width: 768px) {
       .card {
           width: 300px;
           height: 300px;
       }
   }
   ```
3. **Dynamic DOM Manipulation**:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       const carousel = document.querySelector('.carousel');
       const cards = document.querySelectorAll('.card');
       // Add interactivity logic here
   });
   ```

---

## Known Limitations and Trade-Offs

1. **JavaScript Logic**: The current implementation uses basic JavaScript for interactivity, which may become inefficient with a larger number of cards.
2. **Cross-Browser Compatibility**: While modern browsers are supported, older versions may face issues with CSS properties like `backdrop-filter`.

---

## Future Improvements

1. **Enhanced Interactivity**: Implement smooth drag-and-drop functionality for the carousel.
2. **Accessibility**: Add ARIA roles and keyboard navigation for better accessibility.
3. **Scalability**: Refactor JavaScript to handle a dynamic number of cards efficiently.
4. **Unit Testing**: Integrate testing tools like Jest to ensure code reliability.

---

## Time Spent on the Project

- Planning and Design: 1 hours
- Development (HTML, CSS, JS): 2 hours
- Testing and Optimization: 1 hours
- Documentation: 45 minutes
- Total Time Taken: 4:45 (4 hours and 45 minutes)

---

## Assumptions Made

1. The project is intended for desktop and mobile devices.
2. The carousel will contain a static number of cards.
3. The `backdrop-filter` property will be supported by the target browsers.

---

## Evaluation Notes

1. **Code Organization**: Modular and easy to navigate.
2. **Best Practices**: Followed standard coding conventions and modern practices.
3. **Component Reusability**: CSS and JS are modular, ensuring reusability.
4. **Performance**: Optimized animations and minimal DOM manipulation.
5. **UI/UX**: Modern, responsive, and visually appealing.
6. **Documentation**: Comprehensive and adheres to the given guidelines.

---

## Feedback and Contact
If you have any questions or suggestions regarding the project, feel free to reach out:

**Email**: prashantkoirala465@gmail.com
**GitHub**: [alexbytesback](https://github.com/alexbytesback)

---

Thank you for the opportunity to showcase my skills!
