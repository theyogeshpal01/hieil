const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const componentCode = `
const VendorNameDisplay = ({ vendorId, fallbackStyle = {} }) => {
  const [name, setName] = React.useState(null);

  React.useEffect(() => {
    if (!vendorId) return;
    if (typeof vendorId === 'object' && vendorId.vendorName) {
      setName(vendorId.vendorName);
      return;
    }
    const fetchVendor = async () => {
      try {
        const { default: api } = await import('../../config/api');
        const res = await api.get(\`/vendors/\${vendorId}\`);
        if (res.data && res.data.vendorName) {
          setName(res.data.vendorName);
        } else {
          setName(vendorId);
        }
      } catch(e) {
        setName(vendorId);
      }
    };
    fetchVendor();
  }, [vendorId]);

  if (!vendorId) return React.createElement('span', {style: {color: '#9ca3af'}}, 'None');
  return React.createElement('span', { style: fallbackStyle }, name || (typeof vendorId === 'object' ? vendorId._id : vendorId));
};
`;

if (!c.includes('VendorNameDisplay')) {
  c = c.replace(/const formatImageUrl =/, `${componentCode}\nconst formatImageUrl =`);
}

// Replace Vendor Orders & Vendor Payouts
c = c.replace(/\{ key: 'vendorId', label: 'Vendor', render: \(val\) => val && val\.vendorName \? val\.vendorName : \(val \|\| '-'\)/g, 
  `{ key: 'vendorId', label: 'Vendor', render: (val) => React.createElement(VendorNameDisplay, { vendorId: val })`);

// Replace Client Orders Assigned Vendor
c = c.replace(/\{ key: 'vendorId', label: 'Assigned Vendor', render: \(val\) => val \? React\.createElement\('span', \{style: \{color: '#16a34a', fontWeight: 'bold'\}\}, val\.vendorName \|\| val\) : React\.createElement\('span', \{style: \{color: '#9ca3af'\}\}, 'None'\) \}/g,
  `{ key: 'vendorId', label: 'Assigned Vendor', render: (val) => React.createElement(VendorNameDisplay, { vendorId: val, fallbackStyle: { color: '#16a34a', fontWeight: 'bold' } }) }`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
