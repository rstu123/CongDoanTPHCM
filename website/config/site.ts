/* eslint-disable prettier/prettier */
import { Home, People, Feed, Assessment, Settings } from '@mui/icons-material';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Routing',
  home: {
    href: '/',
  },
  navItems: [
    {
      label: 'Trang chủ',
      href: '/',
    },
    {
      label: 'Giới thiệu',
      href: '/introduces',
    },
    {
      label: 'Tin tức',
      href: '/news',
    },
    {
      label: 'Hỏi đáp',
      href: '/requests',
    },
    {
      label: 'Điều hành',
      href: '/controls',
    },
    {
      label: 'Hội viên',
      href: '#',
    },
  ],
  login: {
    label: 'Hội viên',
    href: '/login',
  },
  register: {
    label: 'Dang ki',
    href: '/register'
  },

  portals: {
    dashboard: {
      label: 'Home',
      href: '/portals/dashboard',
      icon: Home,
      title: {
        first: 'All News',
        second: 'Latest Users',
      },
      accounts: {
        label: 'Accounts',
        href: '/portals/dashboard/accounts',
        icon: People,
        title: 'All Users',
      },
      news: {
        label: 'News',
        href: '/portals/dashboard/news',
        icon: Feed,
        title: 'All News',
      },
      accessions: {
        label: 'Accessions',
        href: '/portals/dashboard/accessions',
        icon: Assessment,
        title: 'All Accessions',
      },
      settings: {
        label: 'Settings',
        href: '/portals/dashboard/settings',
        icon: Settings,
        title: 'Settings',
      }
    },
  },
};
