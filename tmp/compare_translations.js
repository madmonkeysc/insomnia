
const fs = require('fs');

const filePath = 'c:/Users/Dell/OneDrive/Desktop/insomnia_web/insomnia-ai/src/data/translations.ts';
const content = fs.readFileSync(filePath, 'utf-8');

const getKeys = (objStr) => {
  const keys = [];
  const lines = objStr.split('\n');
  lines.forEach(line => {
    const match = line.match(/^[ \t]*([a-zA-Z0-9_]+):/);
    if (match) keys.push(match[1]);
  });
  return keys;
};

// Simplified search
const parts = content.split('home: {');
// parts[0] is before first home: {
// parts[1] is home block of ES
// parts[2] is home block of EN

if (parts.length >= 3) {
  const esHome = parts[1].split('},')[0];
  const enHome = parts[2].split('},')[0];
  
  const esKeys = getKeys(esHome);
  const enKeys = getKeys(enHome);
  
  const missingInEn = esKeys.filter(k => !enKeys.includes(k));
  const missingInEs = enKeys.filter(k => !esKeys.includes(k));
  
  console.log('Missing in EN:', missingInEn);
  console.log('Missing in ES:', missingInEs);
} else {
  console.log('Found only', parts.length - 1, 'home blocks');
}
