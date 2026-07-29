const fs = require('fs');

const path = 'src/admin/config/pageConfigs.js';
let content = fs.readFileSync(path, 'utf8');

// For Invoices
const invoiceActionStart = `        actions: (row) => React.createElement('div', {style: {display: 'flex', gap: '5px', flexWrap: 'wrap'}},
          React.createElement('button', {`;
          
const newAction = `        actions: (row) => React.createElement('div', {style: {display: 'flex', gap: '5px', flexWrap: 'wrap'}},
          React.createElement('button', {
              className: 'modern-action-btn btn-neutral',
              onClick: async () => {
                try {
                  const res = await api.get('/vendors');
                  const vendors = Array.isArray(res.data) ? res.data : (res.data.data || []);
                  
                  let options = '<option value="">Select a vendor...</option>';
                  vendors.forEach(v => {
                    options += \`<option value="\${v._id}">\${v.vendorName} (\${v.commission}%)\</option>\`;
                  });
                  
                  const { value: vendorId } = await Swal.fire({
                    title: 'Assign Vendor',
                    html: \`<select id="vendor-select" class="swal2-input">\${options}</select>\`,
                    focusConfirm: false,
                    showCancelButton: true,
                    preConfirm: () => {
                      return document.getElementById('vendor-select').value;
                    }
                  });
                  
                  if (vendorId) {
                    await api.put(\`/invoices/\${row._id}\`, { vendorId });
                    Swal.fire('Assigned!', 'Vendor has been assigned successfully.', 'success').then(() => window.location.reload());
                  }
                } catch (e) {
                  Swal.fire('Error', 'Failed to load vendors', 'error');
                }
              }
          }, 'Assign Vendor'),
          React.createElement('button', {`;
          
content = content.replace(invoiceActionStart, newAction);

// For Retailer Invoices
const retailerInvoiceActionStart = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexWrap: 'wrap', gap: '5px', maxWidth: '160px'}}, 
          React.createElement('button', {`;

const newRetailerAction = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexWrap: 'wrap', gap: '5px', maxWidth: '160px'}}, 
          React.createElement('button', {
              className: 'modern-action-btn btn-neutral',
              onClick: async () => {
                try {
                  const res = await api.get('/vendors');
                  const vendors = Array.isArray(res.data) ? res.data : (res.data.data || []);
                  
                  let options = '<option value="">Select a vendor...</option>';
                  vendors.forEach(v => {
                    options += \`<option value="\${v._id}">\${v.vendorName} (\${v.commission}%)\</option>\`;
                  });
                  
                  const { value: vendorId } = await Swal.fire({
                    title: 'Assign Vendor',
                    html: \`<select id="vendor-select" class="swal2-input">\${options}</select>\`,
                    focusConfirm: false,
                    showCancelButton: true,
                    preConfirm: () => {
                      return document.getElementById('vendor-select').value;
                    }
                  });
                  
                  if (vendorId) {
                    await api.put(\`/invoices/\${row._id}\`, { vendorId });
                    Swal.fire('Assigned!', 'Vendor has been assigned successfully.', 'success').then(() => window.location.reload());
                  }
                } catch (e) {
                  Swal.fire('Error', 'Failed to load vendors', 'error');
                }
              }
          }, 'Assign Vendor'),
          React.createElement('button', {`;

content = content.replace(retailerInvoiceActionStart, newRetailerAction);

// For Vendor Payouts
const payoutActionStart = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
          React.createElement('button', {
              className: 'modern-action-btn btn-success',
              onClick: () => alert(\`Release Payout for: \${row.invoiceId}\`)
          }, React.createElement(FaCheck, null), ' Release'),
          React.createElement('button', {
              className: 'modern-action-btn btn-primary',
              onClick: () => alert(\`Download PDF for: \${row.invoiceId}\`)
          }, React.createElement(FaFileAlt, null), ' PDF')`;

const newPayoutAction = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
          React.createElement('button', {
              className: 'modern-action-btn btn-success',
              disabled: row.status === 'Released',
              style: row.status === 'Released' ? { opacity: 0.5, cursor: 'not-allowed' } : {},
              onClick: async () => {
                if (row.status === 'Released') return;
                const result = await Swal.fire({
                  title: 'Release Payout?',
                  text: 'Are you sure you want to release this payout?',
                  icon: 'warning',
                  showCancelButton: true
                });
                if (result.isConfirmed) {
                  try {
                    await api.put(\`/vendor-payouts/\${row._id}/release\`);
                    Swal.fire('Released!', 'Payout has been marked as released.', 'success').then(() => window.location.reload());
                  } catch (e) {
                    Swal.fire('Error', 'Failed to release payout', 'error');
                  }
                }
              }
          }, React.createElement(FaCheck, null), ' Release'),
          React.createElement('button', {
              className: 'modern-action-btn btn-primary',
              onClick: () => window.open(\`/admin/vendor-management/payout-preview/\${row._id}\`, '_blank')
          }, React.createElement(FaFileAlt, null), ' PDF')`;

content = content.replace(payoutActionStart, newPayoutAction);

fs.writeFileSync(path, content, 'utf8');
console.log('pageConfigs updated successfully.');
