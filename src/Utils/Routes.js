import Home from '../Containers/Home'
import Rules from '../Containers/Rules'
import Battles from '../Containers/Battles'

export const Routes = [
  {
    label: 'Home',
    exact: true,
    path: '/',
    component: Home,
    icon: 'home'
  },
  {
    label: 'Previous Battles',
    path: '/battles',
    component: Battles,
    icon: 'history'
  },
  {
    label: 'Rules',
    path: '/rules',
    component: Rules,
    icon: 'book'
  }
]