const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /const newTotalPaid = installments\.reduce\(\(sum, inst\) => inst\.status === 'Paid' \? sum \+ \(parseFloat\(inst\.amount\) \|\| 0\) : sum, 0\);\s*const newIsFullPaid = newTotalPaid >= agreedPrice;\s*const payload = \{ installments \};\s*if \(newIsFullPaid && agreedPrice > 0\) \{\s*payload\.status = 'Completed';\s*\}\s*await api\.put\(`\/vendor-orders\/\$\{order\._id\}`\, payload\);/g;

const replacement = `const paidInsts = installments.filter(inst => inst.status === 'Paid');
                                          let newAdvance = parseFloat(order.advancePaidInr) || 0;
                                          let newBalance = parseFloat(order.balancePaidInr) || 0;
                                          
                                          if (paidInsts.length > 0) {
                                              if (!order.advancePaidInr || parseFloat(order.advancePaidInr) === 0) {
                                                  newAdvance = parseFloat(paidInsts[0].amount) || 0;
                                                  newBalance = paidInsts.slice(1).reduce((sum, x) => sum + (parseFloat(x.amount) || 0), 0);
                                              } else {
                                                  if (newAdvance === (parseFloat(paidInsts[0].amount) || 0)) {
                                                      newBalance = paidInsts.slice(1).reduce((sum, x) => sum + (parseFloat(x.amount) || 0), 0);
                                                  } else {
                                                      newBalance = paidInsts.reduce((sum, x) => sum + (parseFloat(x.amount) || 0), 0);
                                                  }
                                              }
                                          }
                                          
                                          const newTotalPaid = newAdvance + newBalance;
                                          const newIsFullPaid = newTotalPaid >= agreedPrice;
                                          
                                          const payload = { 
                                              installments,
                                              advancePaidInr: newAdvance,
                                              balancePaidInr: newBalance
                                          };
                                          
                                          if (newIsFullPaid && agreedPrice > 0) {
                                              payload.status = 'Completed';
                                          }
                                          await api.put(\`/vendor-orders/\${order._id}\`, payload);
                                          
                                          order.advancePaidInr = newAdvance;
                                          order.balancePaidInr = newBalance;`;

c = c.replace(regex, replacement);
fs.writeFileSync('src/admin/config/pageConfigs.js', c);
