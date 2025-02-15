# 7-1 SCSS Architecture Documentation

## Introduction

This document describes the 7-1 pattern for structuring SCSS files in our project. This architecture promotes maintainability, scalability, and collaboration by organizing our styles into distinct folders with specific responsibilities. Following this pattern is *mandatory* for all team members.

## 1. Overview of the 7-1 Pattern

The 7-1 pattern divides our SCSS into seven folders, each containing partial files (prefixed with `_`), and one main `index.scss` file that imports all the partials. This `index.scss` file is the *single entry point* for all our styles.

## 2. Folder Structure

```
styles/
├── abstracts/      // Reusable variables, mixins, functions, placeholders
├── base/          // Foundational styles (reset, typography, base elements)
├── components/     // Styles for specific UI components
├── layout/         // Styles for overall layout (grid, header, footer, etc.)
├── pages/         // Styles specific to individual pages
├── themes/        // Styles for different visual themes (optional)
├── vendors/       // Styles from third-party libraries
└── index.scss     // Main entry point - imports all partials
```

## 3. File Naming Conventions

- **Partials:** All partial files within the seven folders should be prefixed with an underscore (`_`). For example: `_variables.scss`, `_buttons.scss`. These partials *should not* be compiled directly.
- **Main File:** The main SCSS file, located in the `styles` directory, is named `index.scss`. This file is what we import into our application.

## 4. `index.scss` - The Single Entry Point

The `index.scss` file is the *only* SCSS file that should be imported into our application's entry point (e.g., `app/layout.js` in Next.js App Router or `pages/_app.js` in Next.js Pages Router). It is responsible for importing all other partials in the correct order.

```scss
// styles/index.scss
@use "abstracts/variables" as variables;
@use "abstracts/functions" as functions;
@use "abstracts/mixins" as mixins;
@use "abstracts/placeholders" as placeholders;

@use "base/reset" as reset; // Or normalize
@use "base/typography" as typography;
@use "base/animations" as animations;

@use "layout/grid" as grid;
@use "layout/header" as header;
@use "layout/footer" as footer;
@use "layout/navigation" as navigation;

@use "components/buttons" as buttons;
@use "components/cards" as cards;
@use "components/forms" as forms;

@use "pages/home" as home;
@use "pages/about" as about;
@use "pages/contact" as contact;
```

## 5. Folder Breakdown and Usage

### **`abstracts/`**
Contains SCSS variables, functions, mixins, and placeholders. These are our tools. No actual styles should be defined here, only declarations.

- **`_variables.scss`**: Define colors, fonts, spacing units, breakpoints, z-index values, border radii, shadows, and transitions. Use maps for colors, typography, spacing, breakpoints, etc.
- **`_mixins.scss`**: Define reusable mixins (e.g., media queries, flexbox shortcuts, text styles, transitions).
- **`_functions.scss`**: Define custom SCSS functions (e.g., for calculating colors, spacing, font sizes).
- **`_placeholders.scss`**: Use placeholders (`%`) for common style blocks that can be `@extend`ed in other styles.

### **`base/`**
Contains foundational styles for HTML elements. These are the building blocks.

- **`_reset.scss`**: CSS reset or normalize.css import.
- **`_typography.scss`**: Base typography styles (headings, paragraphs, links, etc.).
- **`_animations.scss`**: Global animation styles.

### **`components/`**
Styles for reusable UI components (buttons, cards, forms, modals, etc.). Each component should have its own partial file.

### **`layout/`**
Styles for the overall layout of the website (grid system, header, footer, navigation, sidebars, etc.).

### **`pages/`**
Styles specific to individual pages. These styles should be minimal and primarily for page-specific layout or content. Try to keep reusable component styles in the components folder.

### **`themes/` (Optional)**
Styles for different visual themes (light, dark, etc.).

### **`vendors/`**
Styles from third-party libraries (Bootstrap, Font Awesome, etc.). Keep these separate so they can be easily updated.

## 6. How to Use the System

1. **Define Variables, Functions, and Mixins:** In the `abstracts` folder, define your colors, fonts, spacing, mixins, and functions. Use maps for colors, typography, spacing, breakpoints, etc. This is critical for consistency.
2. **Base Styles:** In the `base` folder, define the basic styles for HTML elements.
3. **Component Styles:** In the `components` folder, style your reusable UI components. Use the variables, functions, and mixins from the `abstracts` folder.
4. **Layout Styles:** In the `layout` folder, style the overall layout.
5. **Page-Specific Styles:** In the `pages` folder, add any styles that are specific to individual pages.
6. **Import in `index.scss`:** Ensure all your partials are imported correctly in `index.scss` in the correct order (abstracts first, then base, layout, components, pages, themes, vendors).
7. **Import `index.scss` into your application:** Import `index.scss` into your application's entry point (e.g., `app/layout.js` or `pages/_app.js`).
8. **Use Namespaces:** When using variables, functions, or mixins from other files, always use the namespace assigned in the `@use` statement.

## 7. Best Practices

- **DRY (Don't Repeat Yourself):** Use variables, functions, and mixins to avoid code duplication.
- **Component-Based Styling:** Style components in their own files in the `components` folder.
- **Keep `pages/` Styles Minimal:** Use the `pages` folder primarily for page-specific layout adjustments.
- **Follow Naming Conventions:** Adhere to the naming conventions for files and variables.
- **Document Your Code:** Add comments to your SCSS files to explain the purpose of your styles.
- **Test Thoroughly:** Test your styles across different browsers and devices.

## 8. Example

### SCSS Example: `components/_buttons.scss`

```scss
@use "../abstracts/variables" as variables;
@use "../abstracts/mixins" as mixins;
@use "../abstracts/functions" as functions;

.btn {
  @include mixins.text-style("base", "medium");
  background-color: functions.color("primary", "base");
  // ... other styles
}
```

This documentation should provide a solid foundation for your team to work with the 7-1 pattern effectively. Remember to keep it updated as your project evolves. Consistency and adherence to these guidelines are essential for maintaining a clean and scalable codebase.

