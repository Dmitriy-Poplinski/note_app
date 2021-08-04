import {Route, Switch, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';

function App() {
  return (
    <AlertState>
    <BrowserRouter>
    <Navbar />
      <div className='container pt-4'>
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/about'} exact component={About}/>
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
    </AlertState>
  );
}

export default App;
