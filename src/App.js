import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home,Browse,Signin,Signup} from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import{useAuthListener} from './hooks';
import React from 'react';
function App() {
  const user= useAuthListener();
  return (
    <Router>
      <Routes>
          <Route  path={ROUTES.SIGN_UP} element={
            <IsUserRedirect islogin={user} LoggedInPath={ROUTES.BROWSE} Component={Signup}  path={ROUTES.SIGN_UP} element={<Signup/>}>
              <Signup/>
            </IsUserRedirect>
            }
            >
          </Route>
          <Route  path={ROUTES.BROWSE} 
            element={ 
            <ProtectedRoute islogin={user} Component={Browse} path={ROUTES.BROWSE} >
            </ProtectedRoute>
            }
          >
          </Route>
          <Route  path={ROUTES.HOME} element={
              <IsUserRedirect islogin={user} LoggedInPath={ROUTES.BROWSE} Component={Home} path={ROUTES.HOME} >
              </IsUserRedirect>
            }
          >
          </Route> 
          <Route path={ROUTES.SIGN_IN} 
          element={
                  <IsUserRedirect islogin={user} LoggedInPath={ROUTES.BROWSE} Component={Signin} path={ROUTES.SIGN_IN}>
                  </IsUserRedirect>
            }
          
          />
        
      </Routes>
    </Router> 
  );
  // return(
  //   <Router>
  //     <Routes>
  //       <Route exact path={ROUTES.BROWSE} element={<Browse/>}>
  //       </Route>
  //       <Route exact path={ROUTES.HOME} element={<Home/>}></Route>
  //       <Route exact path={ROUTES.SIGN_IN} element={<Signin/>}></Route>
  //       <Route exact path={ROUTES.SIGN_UP} element={<Signup/>}></Route>
  //     </Routes>
  //   </Router>
  // )
}

export default App;
