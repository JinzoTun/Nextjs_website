export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
        label: 'Subscribe',
        route: '/subscribe',
    },
    {
      label: 'contact',
      route: '/contact',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }