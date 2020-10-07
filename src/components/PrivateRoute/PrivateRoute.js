import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { selectedEventTasks } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(selectedEventTasks);
    const info = sessionStorage.getItem('isSignedIn');
    return (
        // Private Route Code
          <Route
        {...rest}
        render={({ location }) =>
        info ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;