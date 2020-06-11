export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      name: 'Admin',
      icon: 'Calendar',
      children: [
        {
          name: 'Appointments',
          url: '/admin/appointments',
        },
        {
          name: 'Walk-Ins',
          url: '/admin/walk-in',
        },
        {
          name: 'Patients',
          url: '/admin/patients',
        }
      ],
    },
    {
      name: 'Consultation',
      icon: 'Users',
      children: [
        {
          name: 'Notes',
          url: '/consultation/notes',
        },
        {
          name: 'Tests',
          url: '/consultation/tests',
        },
        {
          name: 'Prescriptions',
          url: '/consultation/prescriptions',
        },
        {
          name: 'Coding',
          url: '/consultation/coding',
        }
      ],
    },
    {
      name: 'Results',
      icon: 'Plus',
      children: [
        {
          name: 'Search',
          url: '/results/search',
        },
        {
          name: 'Positive List',
          url: '/results/positives',
        },
        {
          name: 'Recall',
          url: '/results/recall',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Help',
      url: '/widgets',
      icon: 'Heart',
      badge: {
        text: 'hey',
      },
    },
  ],
  bottom: [
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },
  ],
};
