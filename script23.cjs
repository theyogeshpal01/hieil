const fs = require('fs');

let c = fs.readFileSync('src/admin/pages/QuotationPreview/QuotationPreview.jsx', 'utf8');

const parseBlock = `
  const dateStr = new Date(quotation.createdAt || Date.now()).toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  let parsedAddress = quotation.address;
  let buyerName = quotation.customer || quotation.customerName || '-';
  let buyerEmail = quotation.customerEmail || '-';
  let buyerPhone = quotation.mobile || quotation.phone || '-';
  let buyerTax = '';
  let buyerCountry = quotation.country || '';

  if (typeof parsedAddress === 'string') {
    try {
      const parsed = JSON.parse(parsedAddress);
      if (parsed.company) buyerName = parsed.company;
      if (parsed.email && buyerEmail === '-') buyerEmail = parsed.email;
      if (parsed.phone && buyerPhone === '-') buyerPhone = parsed.phone;
      if (parsed.tax) buyerTax = parsed.tax;
      if (parsed.country && !buyerCountry) buyerCountry = parsed.country;
      
      const addrLines = [parsed.line1, parsed.city, parsed.state, parsed.country].filter(Boolean);
      parsedAddress = addrLines.join(', ');
    } catch(e) {
      // not JSON
    }
  }
`;

c = c.replace(/const dateStr = new Date\(quotation\.createdAt \|\| Date\.now\(\)\)\.toLocaleString\('en-IN', \{\s*day: '2-digit', month: '2-digit', year: 'numeric'\s*\}\);/, parseBlock);


const h2Regex = /<h2>QUOTATION<\/h2>/;
c = c.replace(h2Regex, `<h2 style={{ fontSize: '30px', letterSpacing: '1px' }}>QUOTATION</h2>`);

const buyerBlockRegex = /<div className="inv-address-header">PROSPECTIVE BUYER<\/div>[\s\S]*?<div className="inv-address-content">[\s\S]*?<\/div>/;
const buyerBlockReplacement = `<div className="inv-address-header">PROSPECTIVE BUYER</div>
              <div className="inv-address-content">
                <h4>{buyerName}</h4>
                <p>{parsedAddress || '-'}</p>
                {buyerCountry && <p>{buyerCountry}</p>}
                <p>Email: {buyerEmail}</p>
                <p>Phone: {buyerPhone}</p>
                {buyerTax && <p>Tax ID: {buyerTax}</p>}
              </div>`;
c = c.replace(buyerBlockRegex, buyerBlockReplacement);

fs.writeFileSync('src/admin/pages/QuotationPreview/QuotationPreview.jsx', c);
