import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            { 
              if (route.routes) {
                route.routes[0].auth = true
                addFirstroute(route.routes)
              }
              if (route.auth) {
                return route.render ? 
                route.render({ ...props, ...extraProps, route: route })
                :
                <route.component {...props} {...extraProps} route={route} />
              } else {
                return <Redirect to='/' />
              }
            }
          }
        />
      ))}
    </Switch>
  ) : null;
}

function addFirstroute (route) {
  route.forEach(item => {
    if (item.routes) {
      item.routes[0].auth = true
      addFirstroute(item.routes)
    }
  })
}

export default renderRoutes