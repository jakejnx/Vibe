export default {
  top: [
        {
          name: 'Clinics',
          url: '/home',
          icon: 'Clock',
                badge: {
        variant: 'clinic',
        text: '25',
      },
        },
        {
          name: 'Walk-Ins',
          url: '/walk-ins',
          icon: 'Users',
          badge: {
        variant: 'walk',
        text: '3',
      },
        },
                {
          divider: true,
        },
    {
      name: 'Appointments',
      url: '/patient/appointments',
      icon: 'Calendar',
    },
    {
      name: 'Communications',
      url: '/patient/communications',
      icon: 'Mail',
    },
    {
      name: 'Consultation',
      icon: 'Briefcase',
      children: [
        {
          name: 'Notes',
          url: '/patient/notes'
        },
        {
          name: 'Prescriptions',
          url: '/patient/prescriptions',
        },
        {
          name: 'Coding',
          url: '/patient/coding',
        },
      ]
    },
    {
      name: 'Results',
      url: '/patient/results',
      icon: 'Filter',
  },
  {
    name: 'Logs',
    url: '/patient/logs',
    icon: 'Eye',
},

  {
    divider: true,
  },

    {
      name: 'Lists',
      icon: 'Plus',
      children: [
        {
          name: 'Patients',
          url: '/lists/patients',
        },
        {
          name: 'Safeguarding',
          url: '/lists/safeguarding',
        },
        {
          name: 'Positive Results',
          url: '/lists/positives',
        },
        {
          name: 'Recall',
          url: '/lists/recall',
        },
      ],
    },
  ],
  bottom: [
    {
      name: 'Help',
      url: '/widgets',
      icon: 'Heart',
    },
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
    },
  ],
};
