const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', 'utf8');

c = c.replace(/\{ name: '', quantity: '', price: '' \}/g, "{ name: '', itemCode: '', quantity: '', price: '' }");

c = c.replace(/<label className="info-label" style=\{\{display: 'block', marginBottom: '6px'\}\}>Product Name<\/label>[\s\S]*?<input [\s\S]*?placeholder="Product Name"[\s\S]*?\/>[\s\S]*?<\/div>/, `<label className="info-label" style={{display: 'block', marginBottom: '6px'}}>Product Name</label>
                          <input 
                            type="text" 
                            value={product.name} 
                            onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                            className="address-textarea"
                            style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                            placeholder="Product Name"
                          />
                        </div>
                        <div style={{flex: 1}}>
                          <label className="info-label" style={{display: 'block', marginBottom: '6px'}}>Item Code</label>
                          <input 
                            type="text" 
                            value={product.itemCode || ''} 
                            onChange={(e) => handleProductChange(index, 'itemCode', e.target.value)}
                            className="address-textarea"
                            style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                            placeholder="Item Code"
                          />
                        </div>`);

fs.writeFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', c);
