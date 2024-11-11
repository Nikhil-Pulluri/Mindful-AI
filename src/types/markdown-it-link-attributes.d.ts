declare module 'markdown-it-link-attributes' {
  import MarkdownIt from 'markdown-it';
  
  interface LinkAttributesOptions {
    pattern?: RegExp;
    attrs: Record<string, string>;
  }

  const linkAttributes: (md: MarkdownIt, options: LinkAttributesOptions) => void;
  export default linkAttributes;
}
