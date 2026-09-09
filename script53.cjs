const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const combinedImport = `import { FaBus, FaCar, FaCheck, FaCommentAlt, FaDownload, FaEdit, FaEnvelope, FaExternalLinkAlt, FaEye, FaFileAlt, FaFilePdf, FaImages, FaList, FaMoneyBillAlt, FaPhone, FaPhoneAlt, FaPlane, FaSave, FaStar, FaStore, FaTh, FaTimes, FaTrash, FaTrashAlt, FaTruck, FaUsers, FaWhatsapp } from 'react-icons/fa';`;

c = c.replace("import React from 'react';\r\n", `import React from 'react';\r\n${combinedImport}\r\n`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
console.log('Done!');
