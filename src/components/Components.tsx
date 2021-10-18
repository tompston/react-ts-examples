import Home from './Home'
import Counter from './examples/counter/Counter'
import ParentExample from './examples/parent-to-child-props/parent'
import MyProjects from './examples/for-loops/projects'
import UserInput from './examples/user-input/user-input'
import FetchJson from './examples/fetch-json/FetchJson'
import OnScrollExample from './examples/on-scroll/onScrollExample'
import BrowserWidth from './examples/browser-width/BrowserWidth'
import RouterExample from './examples/router/RouterExample'
// array that holds objects with the information about the Components
export const ExampleComponents = [
  //  component   the imported Component
  //  name        name that will be used for Link
  //  route       url route for the component, the number indicates in which folder the code will be
  {
    component: Home,
    name: 'Home',
    route: '/',
  },

  {
    component: Counter,
    name: 'Counter',
    route: '/counter',
  },
  {
    component: ParentExample,
    name: 'Parent To Child Prop',
    route: '/parent-to-child-props',
  },
  {
    component: MyProjects,
    name: 'For Loops on Arrays',
    route: '/for-loops',
  },
  {
    component: UserInput,
    name: 'User Input',
    route: '/user-input',
  },
  {
    component: FetchJson,
    name: 'Fetch JSON',
    route: '/fetch-json',
  },
  {
    component: OnScrollExample,
    name: 'On Scroll',
    route: '/on-scroll',
  },
  {
    component: BrowserWidth,
    name: 'Browser Width',
    route: '/browser-width',
  },
  {
    component: RouterExample,
    name: 'Router Example',
    route: '/router',
  },
]
