import './App.css';
import Home from './pages/public/Home'
import About from './pages/public/About'
import Login from './pages/public/Login'
import Cinemas from "./pages/public/Cinemas";
import Search from "./pages/public/Search";
import NotFound from "./pages/public/NotFound";
import Signup from "./pages/public/Signup";
import Showing from "./pages/public/Showing";
import Coming from "./pages/public/Coming";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"



function App() {
    //return (<Home/>);
    return (
        <Router>
            <Switch>
                <Route path="/cinemas">
                    <Cinemas/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/coming-soon">
                    <Coming/>
                </Route>
                <Route path="/now-showing">
                    <Showing/>
                </Route>
                {/*<Route path="/search">*/}
                {/*    <Search/>*/}
                {/*</Route>*/}
                {/*<Route path="/about">*/}
                {/*    <About/>*/}
                {/*</Route>*/}
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

