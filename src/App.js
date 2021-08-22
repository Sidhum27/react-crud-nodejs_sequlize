import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <NotificationContainer/>
        <div>
          <Route exact path='/' component={Read} />
        </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route exact path='/update' component={Update} />
      </div>

    </Router>
  );
}

export default App;