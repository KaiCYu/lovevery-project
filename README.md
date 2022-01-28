This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes and TODOs
This is the Lovevery front-end takehome project for Kai Yu.

This is a first pass at my implementation for product pages for the first 6 subscription boxes of Lovevery. The first "product" is an introduction to the Play Kits. When the user enters a birthdate, they are directed to the product page for the Play Kit that is relevant for the child's age.

My implementation uses React, React Bootstrap (and icons), moment, react-datepicker, and deployed via Vercel.

The code is structured off of index.js, and the "main" component of `Products.js`, which has a Carosuel along with dummy data for each of the products (imported from data.js).


TODOs:
- extend components to fetch real data from an endpoint
  - the most straight-foward way to implement this is to leverage the NextJS API routes, by adding a handler function under the `/api/*` directory. Ideally, after the user submits the birthdate information
- add unit tests for components
  - leverage the NextJS setup for Jest. https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
- implement the Breadcrumb.js 
- refactor `Products.js` to pull out the Carousel component from the product details
