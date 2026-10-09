// Content shared between the AttendTrack project card, its case-study
// modal on the home page, and the standalone gallery page.

export const attendTrack = {
  tag: 'Mini Capstone · BSIT · Cebu Eastern College',
  title: { prefix: 'Attend', rest: 'Track' },
  cardTag: 'Mini Capstone · BSIT',
  cardDesc:
    'A student attendance tracking and management system built as a mini-capstone project at Cebu Eastern College. Replaces manual paper logs with a fast, role-based digital solution for teachers and students.',
  modalDesc:
    'AttendTrack is a student attendance management system developed as a mini-capstone project at Cebu Eastern College. It replaces manual paper-based attendance logging with a clean, fast, role-based digital system for both teachers and students.',
  cardScreens: [
    { src: '/Pic1.jpg', alt: 'AttendTrack Dashboard' },
    { src: '/Pic2.jpg', alt: 'AttendTrack Attendance Log' },
    { src: '/Pic3.jpg', alt: 'AttendTrack Student View' },
  ],
  cardStack: ['Attendance System', 'Admin Dashboard', 'Reporting', 'Database'],
  modalStack: ['Attendance System', 'Admin Dashboard', 'Real-time Reports', 'Role-based Access', 'Database', 'Mini Capstone'],
  mainScreenshot: { src: '/Pic1.jpg', alt: 'AttendTrack Dashboard' },
  modalScreenshots: [
    { src: '/Pic1.jpg', alt: 'AttendTrack Dashboard' },
    { src: '/Pic2.jpg', alt: 'AttendTrack Teacher Console' },
    { src: '/Pic3.jpg', alt: 'AttendTrack Student Dashboard' },
    { src: '/PicTeacher.jpg', alt: 'AttendTrack Teacher View' },
    { src: '/PicStudent.jpg', alt: 'AttendTrack Student View' },
  ],
  features: [
    'Landing page with a modern, clean interface and Sign In call-to-action',
    'Secure session-based authentication with password visibility toggle',
    'Role selection screen routing Teachers and Students to separate dashboards',
    'Student dashboard showing attendance rate, present days, missed classes and streak',
    'Teacher console for marking attendance, managing students, filtering by date and editing records',
  ],
}

// Gallery page: featured card + grid of 4 (in DOM order, used by the lightbox)
export const galleryItems = [
  { src: '/Pic1.jpg', alt: 'AttendTrack Landing Page', title: 'Landing Page', sub: 'Hero section with neural network background', featured: true },
  { src: '/Pic2.jpg', alt: 'Login Screen', title: 'Login Screen', sub: 'Academic attendance hub' },
  { src: '/Pic3.jpg', alt: 'Role Selection', title: 'Role Selection', sub: 'Teacher & Student portals' },
  { src: '/PicTeacher.jpg', alt: 'Teacher Dashboard', title: 'Teacher Dashboard', sub: 'Attendance management panel' },
  { src: '/PicStudent.jpg', alt: 'Student Dashboard', title: 'Student Dashboard', sub: 'Attendance overview & streak' },
]

// "Things I've built" section, second card (non-modal)
export const devFolio = {
  tag: 'Personal Project',
  title: { prefix: 'Dev', rest: 'Folio' },
  desc:
    'A hand-coded responsive portfolio website built to present projects, skills, and background. Features a dark/light mode toggle, scroll-reveal animations, and a project case study modal — no frameworks, just HTML, CSS, and JavaScript.',
  stack: ['HTML', 'CSS', 'JavaScript'],
}

export const portfolioProjects = [
  {
    tag: 'Full-Stack Web App',
    title: 'PortFold',
    desc: 'A portfolio builder for creating, editing, previewing, and publishing personal portfolio sites. Includes three templates and an interactive Three.js workstation in the Creative design.',
    stack: ['Laravel', 'Supabase', 'Three.js', 'Tailwind CSS'],
    screenshots: [
      { src: '/project-previews/portfold-modern.jpg', alt: 'PortFold Modern portfolio template' },
      { src: '/project-previews/portfold-creative.jpg', alt: 'PortFold Creative 3D workstation template' },
      { src: '/project-previews/portfold-simple.jpg', alt: 'PortFold Simple portfolio template' },
    ],
    sourceUrl: 'https://github.com/johnfrancisprimor21-tech/PortFold',
    liveUrl: 'https://portfold.onrender.com',
  },
  {
    tag: 'Full-Stack Web App',
    title: 'Personal Task Manager',
    desc: 'A responsive task management app for creating, editing, and deleting tasks, setting optional due dates, and tracking pending or completed work.',
    stack: ['Laravel', 'PHP', 'Blade', 'Supabase PostgreSQL'],
    screenshots: [
      { src: '/project-previews/task-manager-dashboard.png', alt: 'Task Manager dashboard with a task' },
      { src: '/project-previews/task-manager-form.png', alt: 'Task Manager add task form' },
      { src: '/project-previews/task-manager-empty.png', alt: 'Task Manager dashboard overview' },
    ],
    sourceUrl: 'https://github.com/johnfrancisprimor21-tech/task-manager',
  },
  {
    tag: 'Java Desktop App',
    title: 'TaskFlow',
    desc: 'A Java Swing task manager for organizing work, personal, and school tasks. Add tasks with due dates and priority, filter the list, view task details, mark work complete, and remove tasks.',
    stack: ['Java', 'Java Swing', 'Object-Oriented Programming'],
    screenshots: [
      { src: '/project-previews/taskflow-dashboard.svg', alt: 'TaskFlow Java desktop task manager with category filters and prioritized task cards' },
    ],
    sourceUrl: 'https://github.com/johnfrancisprimor21-tech/TaskFlow',
  },
]
