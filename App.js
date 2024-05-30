// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthComponent from './AuthComponent';
import PropertyList from './PropertyList';
import PropertyDetails from './PropertyDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthComponent} />
                <Route path="/properties/:id" component={PropertyDetails} />
                <Route path="/properties" component={PropertyList} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
