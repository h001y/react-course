import React from 'react';
import BookCard from './components/pages/bookCard';
import BookList from './components/pages/bookList';
import Main from './components/pages/main';
import WishList from './components/pages/wishList';
import Error404 from "./components/pages/404";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {bookPath} from "./services/helpers/routes";

import './index.css'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={Main} path='/' exact />
                    <Route component={WishList} path='/wishlist' exact />
                    <Route component={BookCard} path={bookPath()} strict exact />
                    <Route component={BookList} path='/booklist' strict exact />
                    <Route path='/404' component={Error404} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;