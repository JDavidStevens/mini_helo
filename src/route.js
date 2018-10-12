import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

export default(
<Switch>
<Route exact path='/' component={Auth}/>
<Route path='/dashboard' component={Dashboard}/>
<Route path='/new' component={Form}/>
<Route path='/post/:postid' component={Post}/>
</Switch>
)
