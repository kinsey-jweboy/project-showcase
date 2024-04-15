export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Jweboy Team',
  description: 'We have rich experience in web, small program development.',
  navItems: [
    {
      label: 'project',
      href: '/project',
    },
    {
      label: 'about',
      href: '/about',
    },
    {
      label: 'contact',
      href: '/contact',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    about: '/about',
    contact: '/contact',
  },
};
