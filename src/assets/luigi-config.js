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
            pathSegment: 'address-book',
            label: 'Address Book',
            icon: 'address-book',
            viewUrl: '/sampleapp.html#/address-book'
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
