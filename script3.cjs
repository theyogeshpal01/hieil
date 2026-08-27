const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const fieldsToInsert = `
        { key: 'paymentTerms', label: 'Payment Terms', type: 'textarea', formLabel: 'Payment Terms', hideInTable: true },
        { key: 'packaging', label: 'Packaging', type: 'textarea', formLabel: 'Packaging', hideInTable: true },
        { key: 'qualityAssurance', label: 'Quality Assurance', type: 'textarea', formLabel: 'Quality Assurance', hideInTable: true },
        { key: 'leadTime', label: 'Lead Time', type: 'textarea', formLabel: 'Lead Time', hideInTable: true },
        { key: 'cancellation', label: 'Cancellation Terms', type: 'textarea', formLabel: 'Cancellation Terms', hideInTable: true },
        { key: 'specialInstructions', label: 'Special Instructions', type: 'textarea', formLabel: 'Special Instructions', hideInTable: true }`;

c = c.replace(
  /\{ key: 'expectedDeliveryDate', label: 'Expected Delivery Date', type: 'date', formLabel: 'Expected Delivery Date', hideInTable: true \},(\s*)/, 
  `{ key: 'expectedDeliveryDate', label: 'Expected Delivery Date', type: 'date', formLabel: 'Expected Delivery Date', hideInTable: true },$1${fieldsToInsert}`
);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
