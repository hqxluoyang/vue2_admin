export default [{
  path: '/',
  name: 'index',
  activeClass: 'custom-active-class',
  component: require('./views/home/index')
}, {
  path: '/login',
  name: 'login',
  component: require('./views/login/index')
}, {
  path: '/music',
  name: 'music',
  component: require('./views/music/index')
}, {
  path: '/cinema',
  name: 'cinema',
  component: require('./views/cinema/index')
}, {
  path: '/detail/:id',
  name: 'detail',
  component: require('./views/film/detail')
}, {
  path: '/card',
  name: 'card',
  component: require('./views/card/index')
}, {
  path: '*',
  component: require('./views/home/index')
}]

