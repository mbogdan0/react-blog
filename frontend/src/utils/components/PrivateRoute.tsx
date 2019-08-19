import React from "react";
import {Redirect, Route} from "react-router";
import {isAuthOk} from "../helpers/keep-token";



function PrivateRoute({ component: Component, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthOk() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;