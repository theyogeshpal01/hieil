const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

// Replace BOTH occurrences of the status logic (Pay button and Add installment)
// Old pattern: only set 'Completed' when fully paid
// New pattern: 'Production Started' on first payment, 'Goods Received' on full payment

// We replace the two matching blocks
const oldStatusBlock = `if (newIsFullPaid && agreedPrice > 0) {
                                                payload.status = 'Completed';
                                            }`;

const newStatusBlock = `if (newIsFullPaid && agreedPrice > 0) {
                                                payload.status = 'Goods Received';
                                            } else if (paidInsts.length === 1 && newAdvance > 0 && (parseFloat(order.status === 'Pending' ? 0 : 1) !== 1)) {
                                                // First installment just paid = advance received = production started
                                                if (!order._autoStatusSet) {
                                                    payload.status = 'Production Started';
                                                }
                                            }`;

// Replace all occurrences
c = c.split(oldStatusBlock).join(newStatusBlock);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
console.log('Done');
