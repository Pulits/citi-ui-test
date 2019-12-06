import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Navegación'
  },
  {
    name: 'Mensajes',
    url: '/mensajes',
    icon: 'icon-envelope'
  },
  {
    divider: true
  }  
];
