import LayoutBasic from '../layouts/LayoutBasic'
import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    component: Home,
    layout: LayoutBasic,
    exact: true
  }
]

export default routes
