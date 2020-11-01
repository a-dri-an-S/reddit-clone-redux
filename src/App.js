import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**
 * These are sample imports if you are using Redux in
 * a particular component
 *
 * import { connect } from 'react-redux';
 * import {  } from './actions';
 */
import Navbar from './components/Navbar'
import Posts from './components/Posts';
import AddPost from './components/AddPost';

const App = () => {

  return (
    <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/add" component={AddPost} />
          </Switch>
    </div>
  );
}


/**
 *    sample code for adding redux state and dispatch
 *    > const mapStateToProps = state => ({ });
 *    > const mapPropsToDispatch = dispatch => ({ })
 *    > export default connect(mapStateToProps, mapPropsToDispatch)(App);
 */

export default App;
