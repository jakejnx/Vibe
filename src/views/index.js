import Clinic from './Clinic';
import WalkIn from './walk-ins';

import Appointments from './patient/appointments';
import Communications from './patient/communications';
import Consultation from './patient/notes';
import Results from './patient/results';
import Logs from './patient/logs';

import Tests from './patient/tests';
import Prescriptions from './patient/prescriptions';
import Coding from './patient/coding';

import Patients from './lists/patients';
import Safeguarding from './lists/safeguarding';
import Positives from './lists/positives';
import Recall from './lists/recall';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Clinics',
    path: '/home',
    component: Clinic,
  },
    {
    name: 'Appointments',
    path: '/patient/appointments',
    component: Appointments,
  },
  {
    name: 'Walk-Ins',
    path: '/walk-ins',
    component: WalkIn,
  },
  {
    name: 'Communications',
    path: '/patient/communications',
    component: Communications,
  },
  {
    name: 'Logs',
    path: '/patient/logs',
    component: Logs,
  },
  {
    name: 'Patients',
    path: '/lists/patients',
    component: Patients,
  },
  {
    name: 'Consultation',
    path: '/patient/notes',
    component: Consultation,
  },
  {
    name: 'Results',
    path: '/patient/results',
    component: Results,
  },
  {
    name: 'Prescriptions',
    path: '/patient/prescriptions',
    component: Prescriptions,
  },
  {
    name: 'Coding',
    path: '/patient/coding',
    component: Coding,
  },
  {
    name: 'Test Requests',
    path: '/patient/tests',
    component: Tests,
  },
  {
    name: 'Safeguarding',
    path: '/lists/safeguarding',
    component: Safeguarding,
  },
  {
    name: 'Positive Results',
    path: '/lists/positives',
    component: Positives,
  },
  {
    name: 'Recall',
    path: '/lists/recall',
    component: Recall,
  },
];

export default pageList;
