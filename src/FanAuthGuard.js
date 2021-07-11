import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const  FanAuthGuard = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('type');
        
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

