import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import { Routes } from 'enums/Routes';
import PrivateRoute from 'components/PrivateRoute';
// import FullPageLoader from 'components/Loaders/FullPageLoader';
import Home from 'pages/Home';
/* DON'T REMOVE THIS LINE - CODE-GENERATOR: PAGES IMPORT */

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        {/* DON'T REMOVE THIS LINE - CODE-GENERATOR: ROUTE */}
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default App;
