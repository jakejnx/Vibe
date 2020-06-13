import React from 'react';
import { SubNavigation } from '../../vibe';

const NAV = [
  {
    name: 'Notes',
    url: '/patient/notes'
  },
  {
    name: 'Prescriptions',
    url: '/patient/prescriptions'
  },
  {
    name: 'Coding',
    url: '/patient/coding'
  },
];

export default function SubNav() {
  return <SubNavigation navList={NAV} />;
}
