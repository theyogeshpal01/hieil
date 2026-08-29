const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const clientOrdersSearch = `{ key: 'status', label: 'Status', render: (val, row, handlers) => {
              let bg = '#fef08a';
              let color = '#854d0e';
              if (val === 'Full Paid' || val === 'Paid') { bg = '#dcfce7'; color = '#166534'; }
                else if (val === 'Partial Paid') { bg = '#fef3c7'; color = '#92400e'; }
              else if (val === 'Cancelled') { bg = '#fee2e2'; color = '#991b1b'; }
              
              const arrowSvg = \`data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='\${color.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\`;

              return React.createElement('select', {
                value: val || 'Pending',
                onChange: (e) => handlers.onUpdateRow(row.id, 'status', e.target.value),
                style: {
                  backgroundColor: bg,
                  color: color,
                  border: \`1px solid \${color}\`,
                  padding: '4px 24px 4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  appearance: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  backgroundImage: \`url("\${arrowSvg}")\`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center',
                  backgroundSize: '12px'
                }
              }, 
              ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'].map(opt => React.createElement('option', { key: opt, value: opt }, opt))
              );
            } }`;

c = c.replace(clientOrdersSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'] }`);

const invoiceSearch = `{ key: 'status', label: 'Status', render: (val, row, handlers) => {
              let bg = '#fef08a';
              let color = '#854d0e';
              if (val === 'Full Paid' || val === 'Paid') { bg = '#dcfce7'; color = '#166534'; }
                else if (val === 'Partial Paid') { bg = '#fef3c7'; color = '#92400e'; }
              else if (val === 'Cancelled') { bg = '#fee2e2'; color = '#991b1b'; }
              
              const arrowSvg = \`data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='\${color.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\`;

              return React.createElement('select', {
                value: val || 'Pending',
                style: {
                  backgroundColor: bg, 
                  color: color, 
                  padding: '6px 28px 6px 12px', 
                  borderRadius: '16px', 
                  fontSize: '12px', 
                  fontWeight: '600',
                  border: '1px solid ' + bg,
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  backgroundImage: \`url("\${arrowSvg}")\`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center',
                  backgroundSize: '12px'
                },
                onChange: (e) => {
                  const newStatus = e.target.value;
                  handlers.onUpdateRow(row.id, 'status', newStatus);
                }
              }, 
              ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'].map(opt => React.createElement('option', { key: opt, value: opt }, opt))
              );
            } }`;

c = c.replace(invoiceSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'] }`);
c = c.replace(invoiceSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Paid', 'Partial Paid', 'Cancelled', 'Full Paid'] }`);

const paymentSearch = `{ key: 'status', label: 'Status', render: (val, row, handlers) => {
            let bg = '#f3f4f6';
            let color = '#374151';
            if (val === 'Full Paid' || val === 'Paid') { bg = '#dcfce7'; color = '#166534'; }
                else if (val === 'Partial Paid') { bg = '#fef3c7'; color = '#92400e'; }
            else if (val === 'Failed') { bg = '#fee2e2'; color = '#991b1b'; }
            else if (val === 'Refunded') { bg = '#fef08a'; color = '#854d0e'; }
            
            const arrowSvg = \`data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='\${color.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\`;
            
            return React.createElement('select', {
              value: val || 'Pending',
              style: {
                backgroundColor: bg,
                color: color,
                padding: '6px 28px 6px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid ' + bg,
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundImage: \`url("\${arrowSvg}")\`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
                backgroundSize: '14px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              },
              onChange: (e) => {
                handlers.onUpdateRow(row.id, 'status', e.target.value);
              }
            }, 
            ['Pending', 'Full Paid', 'Partial Paid', 'Failed', 'Refunded'].map(opt => React.createElement('option', { key: opt, value: opt }, opt))
            );
          } }`;

c = c.replace(paymentSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Full Paid', 'Partial Paid', 'Failed', 'Refunded'] }`);
c = c.replace(paymentSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['Pending', 'Full Paid', 'Partial Paid', 'Failed', 'Refunded'] }`);

const shippingSearch = `{ key: 'status', label: 'Status', render: (val, row, handlers) => {
            let bg = '#f3f4f6';
            let color = '#374151';
            if (val === 'In Transit') { bg = '#fef08a'; color = '#854d0e'; }
            else if (val === 'Delivered') { bg = '#dcfce7'; color = '#166534'; }
            else if (val === 'Failed') { bg = '#fee2e2'; color = '#991b1b'; }
            else if (val === 'Returned') { bg = '#ffedd5'; color = '#c2410c'; }
            
            const arrowSvg = \`data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='\${color.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\`;
            
            return React.createElement('select', {
              value: val || 'In Transit',
              style: {
                backgroundColor: bg,
                color: color,
                padding: '6px 28px 6px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid ' + bg,
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundImage: \`url("\${arrowSvg}")\`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
                backgroundSize: '14px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              },
              onChange: (e) => {
                handlers.onUpdateRow(row.id, 'status', e.target.value);
              }
            }, 
            ['In Transit', 'Delivered', 'Failed', 'Returned'].map(opt => React.createElement('option', { key: opt, value: opt }, opt))
            );
          } }`;

c = c.replace(shippingSearch, `{ key: 'status', label: 'Status', type: 'select', options: ['In Transit', 'Delivered', 'Failed', 'Returned'] }`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
