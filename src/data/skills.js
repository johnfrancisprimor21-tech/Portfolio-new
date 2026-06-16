// Skill groups for the "What I bring to the table" section.
// `levelClass` maps to the .lv-a / .lv-g / .lv-d / .lv-e badge styles in index.css.
export const skillGroups = [
  {
    icon: 'code',
    title: 'Languages & Tools',
    rows: [
      { name: 'HTML / CSS', level: 'Advanced', levelClass: 'lv-a' },
      { name: 'Java', level: 'Great', levelClass: 'lv-g' },
      { name: 'C#', level: 'Great', levelClass: 'lv-g' },
      { name: 'C', level: 'Good', levelClass: 'lv-d' },
      { name: 'JavaScript', level: 'Learning', levelClass: 'lv-d' },
      { name: 'Git', level: 'Good', levelClass: 'lv-d' },
      { name: 'Firebase / Vite', level: 'Great', levelClass: 'lv-g' },
    ],
  },
  {
    icon: 'database',
    title: 'Environments & Data',
    rows: [
      { name: 'IntelliJ IDEA', level: 'Great', levelClass: 'lv-g' },
      { name: 'Visual Studio', level: 'Great', levelClass: 'lv-g' },
      { name: 'SQL', level: 'Good', levelClass: 'lv-d' },
      { name: 'Firestore', level: 'Good', levelClass: 'lv-d' },
    ],
  },
]
