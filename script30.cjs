const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/await api\.put\(\`\/vendor-orders\/\$\{order\._id\}\`, \{ installments \}\);/g, `const newTotalPaid = installments.reduce((sum, inst) => inst.status === 'Paid' ? sum + (parseFloat(inst.amount) || 0) : sum, 0);
                                          const newIsFullPaid = newTotalPaid >= agreedPrice;
                                          const payload = { installments };
                                          if (newIsFullPaid && agreedPrice > 0) {
                                              payload.status = 'Completed';
                                          }
                                          await api.put(\`/vendor-orders/\${order._id}\`, payload);`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
