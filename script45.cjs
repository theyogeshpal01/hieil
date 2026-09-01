const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/GenericList/GenericList.jsx', 'utf8');

const regex = /const handleEdit = \(row\) => \{\s*setFormData\(row\);\s*setEditingId\(row\.id\);\s*setIsModalOpen\(true\);\s*\};/g;

const replacement = `const handleEdit = (row) => {
    const formattedRow = { ...row };
    // Flatten populated objects to their _id string so <select> fields bind correctly
    for (const key in formattedRow) {
      if (formattedRow[key] && typeof formattedRow[key] === 'object' && formattedRow[key]._id) {
        formattedRow[key] = formattedRow[key]._id;
      }
    }
    setFormData(formattedRow);
    setEditingId(row.id || row._id);
    setIsModalOpen(true);
  };`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/pages/GenericList/GenericList.jsx', c);
