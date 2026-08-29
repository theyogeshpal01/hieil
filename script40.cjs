const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /onChange: \(e\) => \{\s*const newStatus = e\.target\.value;\s*if \(handlers && handlers\.onUpdateRow\) \{\s*handlers\.onUpdateRow\(row\._id, 'status', newStatus\);\s*\} else \{\s*api\.put\(\`\/orders\/\$\{row\._id\}\`,\s*\{\s*status: newStatus\s*\}\)\s*\.then\(\(\) => window\.location\.reload\(\)\)\s*\.catch\(err => alert\('Error updating status: ' \+ err\.message\)\);\s*\}\s*\}/g;

const replaceWith = `onChange: (e) => {
                    const newStatus = e.target.value;
                    if (newStatus === 'Shipped') {
                      Swal.fire({
                        title: 'Create Shipment',
                        html: \`
                          <input id="swal-input-mode" class="swal2-input" placeholder="Shipping Mode / Courier">
                          <input id="swal-input-tracking" class="swal2-input" placeholder="Tracking Number">
                        \`,
                        focusConfirm: false,
                        showCancelButton: true,
                        preConfirm: () => {
                          return {
                            mode: document.getElementById('swal-input-mode').value,
                            tracking: document.getElementById('swal-input-tracking').value
                          }
                        }
                      }).then(async (result) => {
                        if (result.isConfirmed) {
                          try {
                            await api.post('/shipping', {
                              orderNo: row.orderNo,
                              mode: result.value.mode,
                              tracking: result.value.tracking,
                              type: row.type || 'inquiry'
                            });
                            if (handlers && handlers.onUpdateRow) {
                              handlers.onUpdateRow(row._id, 'status', newStatus);
                            } else {
                              await api.put(\`/orders/\${row._id}\`, { status: newStatus });
                              window.location.reload();
                            }
                          } catch(err) {
                            Swal.fire('Error', 'Failed to create shipment.', 'error');
                          }
                        } else {
                          // Revert UI to old value if cancelled
                          e.target.value = val;
                        }
                      });
                    } else {
                      if (handlers && handlers.onUpdateRow) {
                        handlers.onUpdateRow(row._id, 'status', newStatus);
                      } else {
                        api.put(\`/orders/\${row._id}\`, { status: newStatus })
                          .then(() => window.location.reload())
                          .catch(err => alert('Error updating status: ' + err.message));
                      }
                    }
                  }`;

c = c.replace(regex, replaceWith);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
