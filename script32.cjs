const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/\{ key: 'status', label: 'Status', render: \(val, row, handlers\) => \{[\s\S]*?\}\s*\}\s*\}/g, (match) => {
    if (match.includes("'Full Paid'")) {
        if (match.includes("'Refunded'")) {
            return `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Full Paid', 'Partial Paid', 'Failed', 'Refunded'] }`;
        }
        return `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'] }`;
    }
    if (match.includes("'In Transit'")) {
        return `{ key: 'status', label: 'Status', type: 'select', options: ['In Transit', 'Delivered', 'Failed', 'Returned'] }`;
    }
    return match;
});

c = c.replace(/\{ key: 'status', label: 'Status', render: \(val\) => \{\s*if \(val === 'Processing'\) \{[\s\S]*?\}\s*\}\s*\}/g, 
    `{ key: 'status', label: 'Status' }`);

c = c.replace(/\{ key: 'status', label: 'Status', render: \(val\) => \{\s*if \(val === 'Accepted'\) \{[\s\S]*?\}\s*\}\s*\}/g, 
    `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Quoted', 'Accepted', 'Rejected'] }`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
