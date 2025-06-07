const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const docsDir = path.join(__dirname, '../public', 'docs');
const indexPath = path.join(docsDir, 'index.json');
const outputPath = path.join(docsDir, 'searchIndex.json');

const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

const formatTitle = (filename) => {
  return filename
    .replace('.html', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const splitIntoSentences = (text) => {
  const lines = text
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const sentenceRegex = /[^\.!\?]+[\.!\?]+/g;
  const sentences = lines.flatMap(line => {
    const matches = line.match(sentenceRegex);
    return matches ? matches.map(s => s.trim()) : [line];
  });

  return sentences;
};

const searchIndex = index.map(filename => {
  const filePath = path.join(docsDir, filename);
  const html = fs.readFileSync(filePath, 'utf-8');
  const dom = new JSDOM(html);
  const rawText = dom.window.document.body.textContent;

  const sentences = splitIntoSentences(rawText);

  return {
    title: formatTitle(filename),
    url: `/docs/${filename}`,
    sentences
  };
});

fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), 'utf-8');
console.log('✅ searchIndex.json updated =)');
