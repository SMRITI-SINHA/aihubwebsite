const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

content = content.replace(
  /action\.setLoop\(THREE\.LoopOnce, 1\);/g,
  'action.setLoop(THREE.LoopOnce, 1 as number);'
);

content = content.replace(
  /\(neckBone as THREE\.Object3D\)\.rotation/g,
  '(neckBone as any).rotation'
);

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
