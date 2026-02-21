const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

// Lower the model from position={[0, -1.8, 0]} to position={[0, -2.5, 0]}
content = content.replace(
  /<primitive ref=\{robotRef\} object=\{scene\} scale=\{2.8\} position=\{\[0, -1.8, 0\]\} \/>/,
  '<primitive ref={robotRef} object={scene} scale={3.2} position={[0, -2.5, 0]} />'
);

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
