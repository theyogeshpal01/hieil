const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

// Step 1: Replace FaIcons.X with just X (remove FaIcons. prefix)
c = c.replace(/FaIcons\.Fa(\w+)/g, 'Fa$1');

// Step 2: Collect all unique Fa icons now used in file
const matches = c.match(/\bFa[A-Z]\w+/g) || [];
const allUsed = [...new Set(matches)].sort();

console.log('Icons used:', allUsed.join(', '));

// Step 3: Build the combined import line
const combinedImport = `import { ${allUsed.join(', ')} } from 'react-icons/fa';`;

// Step 4: Remove ALL existing react-icons/fa imports
c = c.replace(/import \{[^}]+\} from 'react-icons\/fa';\r?\n?/g, '');

// Step 5: Add single combined import at top after 'import React'
c = c.replace("import React from 'react';\n", `import React from 'react';\n${combinedImport}\n`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
console.log('Done!');
