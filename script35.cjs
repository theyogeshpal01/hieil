const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const statusSearch = `{ key: 'status', label: 'Status', render: (val) => React.createElement('span', {style: {backgroundColor: '#facc15', color: '#854d0e', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #ca8a04'}}, val) }`;
c = c.replace(statusSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Released'] }`);

const actionsSearch = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
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
          }, React.createElement(FaFileAlt, null), ' PDF')
        )`;

const actionsReplace = `        actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
          React.createElement('button', {
              className: 'modern-action-btn btn-primary',
              onClick: () => window.open(\`/admin/vendor-management/payout-preview/\${row._id}\`, '_blank')
          }, React.createElement(FaFileAlt, null), ' PDF')
        )`;

c = c.replace(actionsSearch, actionsReplace);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
