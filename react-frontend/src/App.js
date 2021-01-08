
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ToDoListComponent from './components/ToDoListComponent';
import CreateToDoComponent from './components/CreateToDoComponent';
import ViewToDoComponent from './components/ViewToDoComponent';
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
                <Route path="/view-todo/:id" exact component={ViewToDoComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
