const fs = require('fs');
let c = fs.readFileSync('src/admin/components/DataTable/DataTable.jsx', 'utf8');

c = c.replace(/\} else if \(col\.key === 'status'\) \{\s*const statusClass = [^;]+;\s*displayValue = <span className=\{`status-badge \$\{statusClass\}`\}>\{cellValue\}<\/span>;/g,
  `} else if (col.key === 'status') {
    displayValue = <UnifiedStatusBadge value={cellValue} options={col.options || []} readonly={!onUpdateRow || col.type !== 'select'} onChange={(v) => onUpdateRow(row.id, 'status', v)} />;`);

fs.writeFileSync('src/admin/components/DataTable/DataTable.jsx', c);
