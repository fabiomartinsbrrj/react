import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2'

import BillingCycle from '../billingCycle/billingCycle'

import App from './app'
import AuthOrApp from './authOrApp'


export default props => (
    <Router history={hashHistory}>

        <Route path='/' component={AuthOrApp} >
            <IndexRoute component={Dashboard2} />
            <Route path='billingCycles' component={BillingCycle} ></Route>
        </Route>

         
        <Redirect from='*' to='/'></Redirect>
    </Router>
)