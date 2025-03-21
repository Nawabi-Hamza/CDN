

publish npm 
npm publish --access public


make unreadable js file
npm install -g terser javascript-obfuscator
npx terser target-file.js -o notification-manager.min.js --compress --mangle
npx javascript-obfuscator targer-file.js --output notification-manager.obf.js
