[🇸🇪 Swedish README](./README.md)

# 🛍️ E-commerce Platform in Next.js

A minimalist e-commerce platform built with **Next.js 15 App Router** and **TypeScript**.
The project fetches products and product data from an external backend to simulate an e-commerce platform.
The purpose of the project is to learn various techniques in Next.js/React.

---

## 📑 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Workflow](#workflow)
- [Sprint Plan](#sprint-plan)
- [Contributing](#contributing)
- [Lessons Learned](#lessons-learned)
- [License](#license)
- [Contact](#contact)
- [Individual Reflection](#individual-reflection)

---

## 📖 About the Project

This is a group exercise where the goal was to build a **minimalist e-commerce platform**.
The purpose is to practice:

- Working in a team (Agile)
- Working in a project (GitHub)
- Next.js/React coding

---

## ✨ Features

- ✅ Home page with Hero section and CTA, featured products
- ✅ Products page with search and category filtering
- ✅ Search bar and navigation bar
- ✅ Admin page with forms for updating, deleting, and creating products

---

## 🛠 Technologies

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DummyJSON - API](https://dummyjson.com/)
- [Sonner - Toast](https://github.com/emilkowalski/sonner)
- [ZOD](https://zod.dev/)
- [WAVE](https://wave.webaim.org/)

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/VladZGarcia/ecommersepage.git

# Enter the project folder
cd ecommersepage

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🚀 Usage

- Navigation -> navigation bar with search function
- Home -> hero with CTA to all products + featured products + about us + contact
- Product -> all products + search bar + category filtering
- Product detail -> product description + reviews + rating + stock status + shipping info + quantity selector + similar products
- About us -> static page with text
- Contact -> page with contact form
- Footer -> footer with links and newsletter
- Admin -> list of all products + delete
- Admin/create -> form to create a product
- Admin/update -> form to update an existing product

---

## 📂 Project Structure

```
|-- app/
|   |-- page.tsx                 # Home page
|   |-- about/page.tsx           # About us
|   |-- admin/
|   |   |-- page.tsx             # Admin page
|   |   |-- create/page.tsx      # Product creation
|   |   |-- update/[id]/page.tsx # Product update
|   |-- api/action.ts            # Server actions for form validation
|   |-- contact/page.tsx         # Contact page
|   |-- pages/products/
|   |   |--page.tsx              # Products page
|   |   |--[id]/page.tsx         # Product detail page
|-- components/                  # Reusable components
|-- components/breadcrumb/       # Breadcrumb components
|-- components/categories/       # Category components
|-- components/Nav/              # Navigation components
|-- components/product-card/     # Product card components
|-- components/product-details/  # Product detail components
|-- lib/data/
|   |   |-- pages.json           # Navigation bar links
|   |   |-- product-data.tsx     # API fetch functions
|   |   |-- utils.ts             # Reusable utility functions
|-- lib/interfaces/products.ts   # Reusable interfaces
|-- public/                      # Images
```

---

## 📈 Workflow

- Group work in agile sprints (SCRUM)
- Issues split into feature branches
- PR + code review

---

## 🗓 Sprint Plan

### Sprint 1 - Basic Structure

- Decided which API to use
- Created design using Figma
- Set up Next.js project
- Created menus & static pages

### Sprint 2 - Products Page

- Set up products page and its components
- Set up product detail page and its components
- Worked on new ideas/additions to previous components

### Sprint 3 - Admin Page

- Set up admin page and related components

### Sprint 4 - Final Touches

- Improved existing components and polished details

---

## 🤝 Contributing

Want to contribute?

1. Fork the project
2. Create a feature branch (`git checkout ...`)
3. Commit & push
4. Submit a Pull Request

---

## 📚 Lessons Learned

- Difference between Server & Client Components in Next.js
- Agile methods
- API
- Responsiveness
- Github feature branches

---

## License

This project is developed for educational purposes and is not intended for production.

---

## ✍️ Contact

- https://github.com/VladZGarcia/
- https://github.com/MissKowalik/
- https://github.com/ebobic/
- https://github.com/Consolider/

---

## Images

![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/1.jpg "Home page")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/2.jpg "Featured Products")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/3.jpg "Contact + Footer")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/4.jpg "Product Detail")

---

## Individual Reflection

My main contribution to the e-commerce project has been designing and implementing core components for product data management and product presentation. I have created both logic and UI components that form the foundation for how products are handled and displayed in the application.

### Files and folders I have created

- **product-data.tsx**  
  I have built the entire data layer for products, including functions to fetch, search, filter, add, update, and delete products via API. This file is the hub for all product data and makes it easy to reuse logic throughout the project.

- **products.ts**  
  I have defined all TypeScript interfaces for products, categories, reviews, and metadata. This has given the project a robust type structure and ensured that all product data is consistent and typed, reducing bugs and speeding up development.

- **product-card folder**  
  I have created and structured all components for displaying individual products in the UI, including image, details, header, and buttons. These components are reusable and used in product lists, search results, and product pages. I have focused on designing them responsively and accessibly.

- **product-details folder**  
  I have built components to display detailed information about a product, such as description, price, images, reviews, and shipping information. These components allow the user to get a complete picture of the product and make purchase decisions.

### Functionality and integrations I have contributed

- I have contributed to making **SearchBar**, **CategoryList**, and **Pagination** work together.  
  By further developing the logic in the project, I have made it possible for the user to search, filter by category, and paginate at the same time – with preserved filters and search terms in the URL.  
  This required me to integrate and synchronize these components so that they work seamlessly together, even though I did not create them from scratch.

- I have implemented that the **search-bar** automatically closes when clicking outside the search field, improving the user experience and reducing the risk of the search field remaining open unnecessarily.

- I have also added functionality so that the **search-bar** closes immediately when clicking on a product card in the searchbar-dropdown, providing a smooth and intuitive flow for the user.

## Techniques and solutions

- **TypeScript interfaces** for safe and scalable data management
- **Asynchronous API calls** with error handling for robust data logic
- **Modular component structure** in React/Next.js for reusability and easy further development
- **Responsive design** with Tailwind CSS to optimize the user experience on all devices
- **Integration of filtering, searching, and pagination** for a cohesive and user-friendly product experience
- **Event handling and DOM interaction** to handle clicks outside and automatically close components

## Results and value

By creating these files and folders and integrating filtering, searching, and pagination, I have laid the foundation for a scalable and maintainable e-commerce platform. My code has made it easy to manage product data, display products attractively, and build on the functionality in the project. I have contributed both technical structure and user-friendly interfaces that are central to the project's success.

## Future improvements

I see potential to further develop:

- More advanced filtering and sorting of products
- Caching and optimization of API calls
- More UI improvements for product presentation and interaction
- Improved error handling and user feedback

---
