const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const search = `                                      installments[i].paymentDate = new Date();
                                      
                                      try {
                                          await api.put(\`/vendor-orders/\${order._id}\`, { installments });`;

const replace = `                                      installments[i].paymentDate = new Date();
                                      
                                      try {
                                          const newTotalPaid = installments.reduce((sum, inst) => inst.status === 'Paid' ? sum + (parseFloat(inst.amount) || 0) : sum, 0);
                                          const newIsFullPaid = newTotalPaid >= agreedPrice;
                                          const payload = { installments };
                                          if (newIsFullPaid && agreedPrice > 0) {
                                              payload.status = 'Completed';
                                          }
                                          await api.put(\`/vendor-orders/\${order._id}\`, payload);`;

c = c.replace(search, replace);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
