import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import { Routes } from 'enums/Routes';
import PrivateRoute from 'components/PrivateRoute';
// import FullPageLoader from 'components/Loaders/FullPageLoader';
import Header from 'containers/Header';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
/* DON'T REMOVE THIS LINE - CODE-GENERATOR: PAGES IMPORT */

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        <Route exact path={Routes.SIGNIN}>
          <SignIn />
        </Route>
        {/* DON'T REMOVE THIS LINE - CODE-GENERATOR: ROUTE */}
      </Switch>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
