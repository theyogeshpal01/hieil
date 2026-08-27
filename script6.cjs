const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/PurchaseOrderPreview/PurchaseOrderPreview.jsx', 'utf8');

c = c.replace(/if \(clientOrder && clientOrder\.products && clientOrder\.products\.length > 0\) \{[\s\S]*?items = clientOrder\.products\.map\(\(p, i\) => \{[\s\S]*?const qty = p\.qty \|\| p\.quantity \|\| 1;[\s\S]*?const unitPrice = vendorUnitPrice > 0 \? vendorUnitPrice : \(vendorOrder\.agreedPriceInr \/ \(clientOrder\.products\.length \* qty\)\);[\s\S]*?const amount = unitPrice \* qty;[\s\S]*?calculatedSubtotal \+= amount;[\s\S]*?return \{[\s\S]*?id: i \+ 1,[\s\S]*?descTitle: p\.productName \|\| 'Product',[\s\S]*?descSub: p\.productId \? \`ID: \$\{p\.productId\}\` : '',[\s\S]*?hsn: p\.hsn \|\| '',[\s\S]*?qty: qty,[\s\S]*?unit: p\.unit \|\| 'Pcs',[\s\S]*?price: unitPrice\.toFixed\(2\),[\s\S]*?amount: amount\.toFixed\(2\)[\s\S]*?\};[\s\S]*?\}\);[\s\S]*?\} else \{/, `if (clientOrder && clientOrder.products && clientOrder.products.length > 0) {
    const totalQty = clientOrder.products.reduce((sum, p) => sum + (parseFloat(p.qty || p.quantity) || 1), 0);
    items = clientOrder.products.map((p, i) => {
      const qty = parseFloat(p.qty || p.quantity) || 1;
      const unitPrice = vendorUnitPrice > 0 ? vendorUnitPrice : (vendorOrder.agreedPriceInr / totalQty);
      const amount = unitPrice * qty;
      calculatedSubtotal += amount;

      return {
        id: i + 1,
        descTitle: p.name || p.productName || 'Product',
        descSub: p.productId ? \`ID: \$\{p.productId\}\` : '',
        hsn: p.hsn || '',
        qty: qty,
        unit: p.unit || 'Pcs',
        price: unitPrice.toFixed(2),
        amount: amount.toFixed(2)
      };
    });
  } else {`);

fs.writeFileSync('src/admin/pages/PurchaseOrderPreview/PurchaseOrderPreview.jsx', c);
