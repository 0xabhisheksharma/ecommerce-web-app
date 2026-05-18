import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';
  
  import MainLayout from '../layouts/MainLayout';
  
  import Home from '../pages/home';
  import Products from '../pages/products';
  import Collections from '../pages/Collections';
  import Profile from '../pages/profile';
  
  function AppRoutes() {
    return (
      <BrowserRouter>
  
        <MainLayout>
  
          <Routes>
  
            <Route
              path="/"
              element={<Home />}
            />
  
            <Route
              path="/products"
              element={<Products />}
            />
  
            <Route
              path="/collections"
              element={<Collections />}
            />
  
            <Route
              path="/profile"
              element={<Profile />}
            />
  
          </Routes>
  
        </MainLayout>
  
      </BrowserRouter>
    )
  }
  
  export default AppRoutes