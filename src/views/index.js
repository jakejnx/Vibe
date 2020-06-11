import Dashboard from './pages/Dashboard';

import Appointments from './admin/appointments';
import WalkIn from './admin/walk-ins';
import Patients from './admin/patients';

import Notes from './consultation/notes';
import Tests from './consultation/tests';
import Prescriptions from './consultation/prescriptions';
import Coding from './consultation/coding';

import RSearch from './results/search';
import Positives from './results/positives';
import Recall from './results/recall';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Home',
    path: '/home',
    component: Dashboard,
  },
    {
    name: 'Appointments',
    path: '/admin/appointments',
    component: Appointments,
  },
  {
    name: 'Walk-Ins',
    path: '/admin/walk-in',
    component: WalkIn,
  },
  {
    name: 'Patients',
    path: '/admin/patients',
    component: Patients,
  },
  {
    name: 'Notes',
    path: '/consultation/notes',
    component: Notes,
  },
  {
    name: 'Tests',
    path: '/consultation/tests',
    component: Tests,
  },
  {
    name: 'Prescriptions',
    path: '/consultation/prescriptions',
    component: Prescriptions,
  },
  {
    name: 'Coding',
    path: '/consultation/coding',
    component: Coding,
  },
  {
    name: 'Result Search',
    path: '/results/search',
    component: RSearch,
  },
  {
    name: 'Positive Result List',
    path: '/results/positives',
    component: Positives,
  },
  {
    name: 'Recall List',
    path: '/results/recall',
    component: Recall,
  },
];

export default pageList;
