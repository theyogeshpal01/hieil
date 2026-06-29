const fs = require('fs');
const path = require('path');

const cssFiles = [
  'src/pages/Services/CustomProductDevelopment.css',
  'src/pages/Services/BulkWholesaleSupply.css',
  'src/pages/About/WhyChooseUs.jsx'
];

// For CustomProductDevelopment and similar
const newCardCss = `  background-color: #15110F;
  border: 1px solid #2c241c;
  border-radius: 4px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: all 0.3s ease;`;

const newTitleCss = `  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;`;

const newDescCss = `  font-family: var(--font-sans);
  font-size: 15.2px;
  color: #b5aaa0;
  line-height: 1.8;
  margin: 0;`;

const newIconCss = `  color: #c8956c;
  margin-bottom: 1.5rem;`;

// We will apply this to the feature cards across the services and about page.
