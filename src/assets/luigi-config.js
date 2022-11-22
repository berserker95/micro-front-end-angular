Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'payment-summary',
            label: 'Payment Summary',
            icon: 'money-bills',
            viewUrl: '/sampleapp.html#/payment-summary'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2'
          },
        ]
      },
    ]
  },
  settings: {
    header: {
      title: 'Fake Bank',
      icon: '/logo.svg'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
