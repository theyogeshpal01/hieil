const fs = require('fs');

let c = fs.readFileSync('src/admin/pages/QuotationPreview/QuotationPreview.jsx', 'utf8');

c = c.replace(/const dateStr = [^;]+;/s, match => {
  return `${match}
  
  let parsedAddress = quotation.address;
  let buyerName = quotation.customer || quotation.customerName || '-';
  let buyerEmail = quotation.customerEmail || '-';
  let buyerPhone = quotation.mobile || quotation.phone || '-';
  let buyerTax = '';

  if (typeof parsedAddress === 'string') {
    try {
      const parsed = JSON.parse(parsedAddress);
      if (parsed.company) buyerName = parsed.company;
      if (parsed.email && buyerEmail === '-') buyerEmail = parsed.email;
      if (parsed.phone && buyerPhone === '-') buyerPhone = parsed.phone;
      if (parsed.tax) buyerTax = parsed.tax;
      
      const addrLines = [parsed.line1, parsed.city, parsed.state, parsed.country].filter(Boolean);
      parsedAddress = addrLines.join(', ');
    } catch(e) {
      // not JSON
    }
  }`;
});

c = c.replace(/<h4>\{quotation\.customer \|\| quotation\.customerName \|\| '-'\.toString\(\)\}<\/h4>/, '<h4>{buyerName}</h4>'); // Handle possible previous regex issues? Wait, let's just do precise replacement.
