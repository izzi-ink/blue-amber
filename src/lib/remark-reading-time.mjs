// Adds `minutes` (estimated reading time) to each Markdown file's frontmatter.
export function remarkReadingTime() {
  return (tree, { data }) => {
    let words = 0;
    const visit = (node) => {
      if (node.type === 'text' || node.type === 'inlineCode') {
        words += node.value.split(/\s+/).filter(Boolean).length;
      }
      node.children?.forEach(visit);
    };
    visit(tree);
    data.astro.frontmatter.minutes = Math.max(1, Math.round(words / 220));
  };
}
