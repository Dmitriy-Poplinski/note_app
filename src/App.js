import {Route, Switch, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { FirebaseState } from './context/firebase/firebaseState';

function App() {
  return (
    <FirebaseState>
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
    </FirebaseState>
  );
}

export default App;
