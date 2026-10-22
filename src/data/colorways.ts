// Change this to any id below to set the site's default palette.
export const defaultColorway = 'slate-blue';
export const colorways = [
  { id: 'slate-blue', name: 'Slate blue', description: 'Cool blue-gray with deep blue headings.', banner: '#e3ebf2', heading: '#2d4c64', link: '#215d89' },
  { id: 'forest', name: 'Forest', description: 'Soft sage with dark evergreen headings.', banner: '#e0eadd', heading: '#304e3c', link: '#276341' },
  { id: 'navy', name: 'Oxford navy', description: 'Pale blue with classic navy headings.', banner: '#e4e8f1', heading: '#2d3f69', link: '#315a9a' },
  { id: 'clay', name: 'Warm clay', description: 'Warm sand with muted terracotta headings.', banner: '#f1e5dc', heading: '#784632', link: '#8a4b31' },
  { id: 'plum', name: 'Quiet plum', description: 'Pale lavender with dark plum headings.', banner: '#ece4ef', heading: '#62446c', link: '#754985' },
] as const;
