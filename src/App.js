import React from 'react';
import Book from './components/pages/bookCard';
import BookList from './components/pages/bookList';
import NewBook from './components/pages/newBook';
import EditBook from './components/pages/editBook';
import Main from './components/pages/main';
import Error404 from "./components/pages/404";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { newBookPath, editBookPath, bookPath, mainPath, booklistPath } from "./services/helpers/routes";

import './index.css'

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route component={Main} path={mainPath()} exact />
                    <Route component={NewBook} path={newBookPath()} strict exact />
                    <Route component={EditBook} path={editBookPath()} strict exact />
                    <Route component={Book} path={bookPath()} strict exact />
                    <Route component={BookList} path={booklistPath()} strict exact />
                    <Route path='/404' component={Error404} />
                </Switch>
            </Router>
        );
    }
}

export default App;