const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', 'utf8');

if (!c.includes('availableProducts')) {
  c = c.replace(/const \[productsInput, setProductsInput\] = useState\(\[\]\);/, `const [productsInput, setProductsInput] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const res = await api.get('/products');
        if (res.data && res.data.products) setAvailableProducts(res.data.products);
        else if (Array.isArray(res.data)) setAvailableProducts(res.data);
      } catch (err) {}
    };
    fetchProds();
  }, []);`);
}

c = c.replace(/<input [\s\S]*?value=\{product\.name\}[\s\S]*?onChange=\{\(e\) => handleProductChange\(index, 'name', e\.target\.value\)\}[\s\S]*?placeholder="Product Name"[\s\S]*?\/>/, `<input 
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
                          </datalist>`);

fs.writeFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', c);
