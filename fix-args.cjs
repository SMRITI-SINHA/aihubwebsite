const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

content = content.replace(
  /mixer\.removeEventListener\('finished'\);/g,
  'mixer.removeEventListener(\'finished\', () => {});'
);

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
