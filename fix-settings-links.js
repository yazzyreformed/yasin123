const fs = require('fs');
const path = require('path');

const walk = (dir, results = []) => {
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
         walk(filePath, results);
      }
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
};

const tsxFiles = walk(path.join(process.cwd(), 'src/app'));

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // For each tsx file, looking for <Link ... href="#"> and replacing it if "Ayarlar" is nearby.
  // We can just regex replace where "href="#" " is within a Link block that also mentions "Ayarlar"
  // It's easier: just replace href="#" with href="/settings" if the link block ends with Ayarlar.
  
  content = content.replace(/(<\s*Link[^>]+href\s*=\s*)(["'])(#)(["'])([^>]*>[\s\S]*?)Ayarlar(\s*<\/span>\s*<\/Link>)/g, '$1$2/settings$4$5Ayarlar$6');
  
  // Also catch variations where Ayarlar comes after SVG
  // This simplistic regex works for the standard markup we used
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed links in:', file);
  }
});
