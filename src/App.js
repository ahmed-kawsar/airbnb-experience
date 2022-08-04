import Content from './Content'
import Header from './Header'
import logo from './images/airbnb.png'

const App = () => {
  return (
    <div className='app'>
      <Header logo={logo} />
      <Content />
    </div>
  )
}

export default App
