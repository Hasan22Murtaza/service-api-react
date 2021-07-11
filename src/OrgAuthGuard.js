import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const  OrgAuthGuard = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('organizerId');
        
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/organizer/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

