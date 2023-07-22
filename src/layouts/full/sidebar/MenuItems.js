import {
   IconCopy, IconLayoutDashboard, IconTypography, 
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [


  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  



  {
    id: uniqueId(),
    title: 'Update',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Dummy1',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  
  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Dummy2',
  //   icon: IconCopy,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
];

export default Menuitems;
