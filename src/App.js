import Header from './pages/Header'
import HashInfo from './pages/HashInfo'
import Types from './pages/Types'
import WhyHash from './pages/WhyHash'
import Companies from './pages/Companies'
import Encryption from './pages/Encryption'
import Hashing from './pages/Hashing'
import BruteForce from './pages/BruteForce'
import CheckPassword from './pages/CheckPassword'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="bg-dark-blue overflow-x-hidden">
      <Header />
      <HashInfo />
      <Types />
      {/* <WhyHash /> */}
      {/* <Companies /> */}
      <Encryption />
      <Hashing />
      <BruteForce />
      <CheckPassword />
    </div>
  )
}

export default App
