
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ToDoListComponent from './components/ToDoListComponent';
import CreateToDoComponent from './components/CreateToDoComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component={ToDoListComponent}></Route>
                <Route path="/todo-list" exact component={ToDoListComponent}></Route>
                <Route path="/add-todo/:id" component={CreateToDoComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
