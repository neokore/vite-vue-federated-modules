const routes = [
  {
    path: '/',
    name: 'routedSection',
    component: () => import('@/views/RoutedSection/RoutedSection.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/RoutedSection/Home.vue')
      },
      {
        path: 'other',
        name: 'other',
        component: () => import('@/views/RoutedSection/Other.vue')
      }
    ]
  }
];

export default routes;
