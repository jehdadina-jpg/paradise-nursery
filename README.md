# Paradise Nursery Shopping Application

**Project name: Paradise Nursery Shopping Application** — an online plant shop built with React, Vite and Redux Toolkit.

*Where Green Meets Serenity*

## About the project

Paradise Nursery is a dynamic e-commerce web application for an online plant shop. Users can browse
houseplants grouped by category, view each plant's thumbnail, name, description and price, add
plants to a shopping cart, and manage the cart by adjusting quantities or removing items. The cart
total and the cart icon count update dynamically as the user shops.

## Features

- **Landing page** with a background image, the company name and a **Get Started** button.
- **About Us** section describing the company and its mission.
- **Product listing page** with 18 unique houseplants grouped into three categories:
  - Air Purifying Plants
  - Low Maintenance Plants
  - Aromatic Fragrant Plants
- **Add to Cart** button on every plant that adds the item to the cart, disables itself once the
  plant has been added, and increments the cart icon count.
- **Navbar** present on both the product listing and cart pages, with Home, Plants and Cart links
  plus a cart icon showing the live total number of items.
- **Shopping cart page** showing the total cart amount, a thumbnail, name and unit price for each
  plant, the total cost per plant, increase/decrease quantity buttons, a delete button per item, a
  **Checkout** button that reports "Coming Soon", and a **Continue Shopping** button that returns to
  the product listing.

## Tech stack

| Purpose | Tool |
| --- | --- |
| UI library | React 19 |
| Build tool | Vite |
| State management | Redux Toolkit + React Redux |
| Styling | Plain CSS modules per component |

## Project structure

```
paradise-nursery/
├── public/
│   └── images/            # Plant thumbnails and the landing page background
├── src/
│   ├── AboutUs.jsx        # Company details
│   ├── App.jsx            # Landing page with company name and Get Started button
│   ├── App.css            # Landing page background image styling
│   ├── CartItem.jsx       # Shopping cart page
│   ├── CartSlice.jsx      # Redux slice: addItem, removeItem, updateQuantity
│   ├── ProductList.jsx    # Product listing page, navbar and cart icon
│   ├── store.js           # Redux store configuration
│   └── main.jsx           # Entry point, wraps App in the Redux Provider
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (http://localhost:5173 by default).

To create a production build:

```bash
npm run build
npm run preview
```
