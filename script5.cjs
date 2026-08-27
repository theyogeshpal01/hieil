const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /\{ key: 'advancePaidInr'[\s\S]*?\{ key: 'specialInstructions', label: 'Special Instructions', type: 'textarea', formLabel: 'Special Instructions', hideInTable: true \}\],/;

const replacement = `{ key: 'advancePaidInr', label: 'Advance Paid (₹)', type: 'number', formLabel: 'Advance Paid (INR)' },
        { key: 'balancePaidInr', label: 'Balance Paid (₹)', type: 'number', formLabel: 'Balance Paid (INR)' },
        { key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Production Started', 'Completed', 'Goods Received'], formLabel: 'Status' },
        { key: 'expectedDeliveryDate', label: 'Expected Delivery Date', type: 'date', formLabel: 'Expected Delivery Date', hideInTable: true },
        { key: 'incoterm', label: 'Incoterm', type: 'select', options: [{ value: 'FOB', label: 'FOB (Free On Board)' }, { value: 'EXW', label: 'EXW (Ex Works)' }, { value: 'CIF', label: 'CIF (Cost, Insurance, and Freight)' }, { value: 'DDP', label: 'DDP (Delivered Duty Paid)' }, { value: 'DAP', label: 'DAP (Delivered at Place)' }, { value: 'FCA', label: 'FCA (Free Carrier)' }, { value: 'CPT', label: 'CPT (Carriage Paid To)' }, { value: 'CIP', label: 'CIP (Carriage and Insurance Paid To)' }, { value: 'CFR', label: 'CFR (Cost and Freight)' }, { value: 'FAS', label: 'FAS (Free Alongside Ship)' }], hideInTable: true },
        { key: 'currency', label: 'Currency', formLabel: 'Currency', hideInTable: true },
        { key: 'paymentTerms', label: 'Payment Terms', type: 'textarea', formLabel: 'Payment Terms', hideInTable: true },
        { key: 'paymentMethod', label: 'Payment Method', formLabel: 'Payment Method', hideInTable: true },
        { key: 'deliveryPort', label: 'Delivery Port', formLabel: 'Delivery Port', hideInTable: true },
        { key: 'packaging', label: 'Packaging', type: 'textarea', formLabel: 'Packaging', hideInTable: true },
        { key: 'qualityAssurance', label: 'Quality Assurance', type: 'textarea', formLabel: 'Quality Assurance', hideInTable: true },
        { key: 'leadTime', label: 'Lead Time', type: 'textarea', formLabel: 'Lead Time', hideInTable: true },
        { key: 'cancellation', label: 'Cancellation Terms', type: 'textarea', formLabel: 'Cancellation Terms', hideInTable: true },
        { key: 'shippingMode', label: 'Shipping Mode', formLabel: 'Shipping Mode', hideInTable: true },
        { key: 'preferredCarrier', label: 'Preferred Carrier', formLabel: 'Preferred Carrier', hideInTable: true },
        { key: 'specialInstructions', label: 'Special Instructions', type: 'textarea', formLabel: 'Special Instructions', hideInTable: true }
      ],`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
