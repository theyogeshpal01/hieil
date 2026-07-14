const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pageConfigs.js');
let content = fs.readFileSync(filePath, 'utf8');

// A function to find the matching closing bracket for an opening bracket
function clearDataArrays(text) {
  let result = text;
  let startIndex = 0;
  
  while (true) {
    const dataStr = 'data: [';
    const matchIndex = result.indexOf(dataStr, startIndex);
    if (matchIndex === -1) break;
    
    const arrayStart = matchIndex + dataStr.length - 1; // index of '['
    
    // Find the matching ']'
    let bracketCount = 0;
    let endIndex = -1;
    for (let i = arrayStart; i < result.length; i++) {
      if (result[i] === '[') bracketCount++;
      if (result[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
    
    if (endIndex !== -1) {
      // Replace the array content with just []
      result = result.substring(0, arrayStart) + '[]' + result.substring(endIndex + 1);
      startIndex = matchIndex + 'data: []'.length;
    } else {
      startIndex = matchIndex + dataStr.length;
    }
  }
  
  return result;
}

const cleaned = clearDataArrays(content);
fs.writeFileSync(filePath, cleaned, 'utf8');
console.log('Successfully cleared all dummy data from pageConfigs.js');
