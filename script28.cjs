const fs = require('fs');
let c = fs.readFileSync('src/admin/components/DataTable/DataTable.jsx', 'utf8');

c = c.replace(/import '\.\/DataTable\.css';/, "import './DataTable.css';\nimport UnifiedStatusBadge from './UnifiedStatusBadge';");

const oldStatusRender = `} else if (col.key === 'status') {
                            const statusClass = \`status-\${String(cellValue).toLowerCase()}\`;
                            displayValue = <span className={\`status-badge \${statusClass}\`}>{cellValue}</span>;`;

const newStatusRender = `} else if (col.key === 'status') {
                            displayValue = <UnifiedStatusBadge 
                              value={cellValue} 
                              options={col.options || []} 
                              readonly={!onUpdateRow || col.type !== 'select'}
                              onChange={(v) => onUpdateRow(row.id, 'status', v)} 
                            />;`;

c = c.replace(oldStatusRender, newStatusRender);
fs.writeFileSync('src/admin/components/DataTable/DataTable.jsx', c);
