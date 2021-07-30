// import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthenticated && routeProps.restricted ? (
                <Redirect to={redirectTo} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default PublicRoute;

// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsLoggedIn(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
