import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Hero from './components/hero/hero';
import Players from './components/players/players';

import App from './components/app';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Hero} />
        <Route path="/myheroes" component={Players} />
    </Route>
);