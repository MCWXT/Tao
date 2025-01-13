export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('/views/Home.js'),
    meta: {
      title: '首页'
    }
  }, {
    path: '/home',
    redirect: '/'
  },
]