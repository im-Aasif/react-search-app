import { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Spinner from './Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskTracker from './TaskTracker/TaskTracker';
const App = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(list => {
                setList(list);
            })
    }, [list]);

    const hasList = list.length > 0;
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        {
                            hasList ?
                                <SearchBar searchList={list} />
                                :
                                <Spinner />
                        }
                    </Route>
                    <Route path="/search">
                        {
                            hasList ?
                                <SearchBar searchList={list} />
                                :
                                <Spinner />
                        }
                    </Route>
                    <Route path="/task-tracker">
                        <TaskTracker />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;