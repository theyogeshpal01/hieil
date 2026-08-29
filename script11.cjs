const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', 'utf8');

const regex = /<input\s+type="text"\s+value=\{product\.name\}\s+onChange=\{\(e\) => handleProductChange\(index, 'name', e\.target\.value\)\}\s+className="address-textarea"\s+style=\{\{minHeight: '40px', marginBottom: '0', padding: '8px 12px'\}\}\s+placeholder="Product Name"\s*\/>/;

const replacement = `<input 
                            type="text" 
                            list={\`prod-list-\$\{index\}\`}
                            value={product.name} 
                            onChange={(e) => {
                              const val = e.target.value;
                              const selectedProd = availableProducts.find(p => p.productName === val);
                              const updated = [...productsInput];
                              updated[index].name = val;
                              if (selectedProd) {
                                updated[index].itemCode = selectedProd.productCode || '';
                                updated[index].price = selectedProd.offerPrice || selectedProd.price || '';
                              }
                              setProductsInput(updated);
                            }}
                            className="address-textarea"
                            style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                            placeholder="Product Name"
                          />
                          <datalist id={\`prod-list-\$\{index\}\`}>
                            {availableProducts.map(ap => (
                              <option key={ap._id} value={ap.productName} />
                            ))}
                          </datalist>`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', c);
