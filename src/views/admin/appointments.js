import React from 'react';
import { SubNavigation } from '../../vibe';

const NAV = [
  {
    name: 'Today',
    url: '/pages/subnav'
  },
  {
    name: 'This Week',
    url: '/#'
  }
];

export default function SubNav() {
  return <SubNavigation navList={NAV} />;
}
