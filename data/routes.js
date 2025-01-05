export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('/views/home.js'),
    meta: {
      title: '首页'
    }
  }, {
    path: '/home',
    redirect: '/'
  },
]