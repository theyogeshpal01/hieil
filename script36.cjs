const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /actions: \(row\) => React\.createElement\('div', \{style: \{display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'\}\},[\s\S]*?React\.createElement\('button', \{\s*className: 'modern-action-btn btn-primary',\s*onClick: \(\) => window\.open\(`\/admin\/vendor-management\/payout-preview\/\$\{row\._id\}`,\s*'_blank'\)\s*\}, React\.createElement\(FaFileAlt, null\), ' PDF'\)\s*\)/;

const replace = `actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
          React.createElement('button', {
              className: 'modern-action-btn btn-primary',
              onClick: () => window.open(\`/admin/vendor-management/payout-preview/\${row._id}\`, '_blank')
          }, React.createElement(FaFileAlt, null), ' PDF')
        )`;

c = c.replace(regex, replace);
fs.writeFileSync('src/admin/config/pageConfigs.js', c);
