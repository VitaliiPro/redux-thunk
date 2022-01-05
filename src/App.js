import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from "./Component/Nav/Nav";
import Users from "./Component/Users/Users"
import  AddUser  from "./Component/AddUser/AddUser";
import { Provider } from 'react-redux';
import { store } from './Redux/store';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <div>
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="addUser" element={<AddUser />}/>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
