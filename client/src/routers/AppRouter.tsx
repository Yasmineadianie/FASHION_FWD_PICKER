import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

//  Layouts 
import PublicLayout  from "../layouts/PublicLayout";
import UserLayout    from "../layouts/UserLayout";
import AdminLayout   from "../layouts/AdminLayout";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";




// Rutas publicas 
const HomePage        = lazy(() => import("../pages/publicPages/shop/homePage/HomePage"));
const DashboardProduct = lazy(() => import("../pages/publicPages/shop/dashboardProduct/DashboardProduct"));
const BrandGrid = lazy(() => import("../pages/publicPages/shop/BrandGrid/BrandGrid"));
const OneBrandProduct = lazy(() => import("../pages/publicPages/shop/OneBrandProduct//OneBrandProduct"));
const SearchPage      = lazy(() => import("../pages/publicPages/shop/searchPage/SearchPage"));
const LoginPage       = lazy(() => import("../pages/publicPages/auth/LoginPage/LoginPage"));
const RegisterPage    = lazy(() => import("../pages/publicPages/auth/registerPage/RegisterPage"));

// Rutas usuario
const UserDashboard  = lazy(() => import("../pages/privatesPages/userPage/UserDashboard/UserDashboard"));
const ProfilePage   = lazy(() => import("../pages/privatesPages/userPage/profilePage/ProfilePage"));
const WishListPage  = lazy(() => import("../pages/privatesPages/userPage/wishlistPage/WishListPage"));
const AllUsersPage  = lazy(() => import("../pages/privatesPages/userPage/AllUsersPage/AllUsersPage"));

//  Rutas Admin 
const AdminDashboard    = lazy(() => import("../pages/privatesPages/adminPage/adminDashboard/AdminDashboard"));
const AdminProductsPage = lazy(() => import("../pages/privatesPages/adminPage/Products/AdminProductsPage"));
const EditProduct       = lazy(() => import("../pages/privatesPages/adminPage/EditProduct/EditProduct"));
const CreateProduct     = lazy(() => import("../pages/privatesPages/adminPage/CreateProduct/CreateProduct"));

export const AppRouter = createBrowserRouter([

  //rutas publicas
   {
    path: '/',
    element: <PublicLayout />, 
    children: [
      { 
        index: true, element: <HomePage />
       },
      {
         path: "product/allProduct", element: <DashboardProduct />
         },
         {
         path: "brand/:id", element: <OneBrandProduct />
         },
          {
         path: "brand", element: <BrandGrid />
         },
      {
         path: "search", element: <SearchPage /> },
      
    
      {
        element: <PublicRoutes />,
        children: [
          {
             path: 'login', element: <LoginPage />
             },
          { 
            path: 'register', element: <RegisterPage />
           },
        ]
      }
    ]
  },

  //rutas privadas de usuario

 {
    path: "/user", element: <PrivateRoutes requiredType={1}/>, 
    children: [
      {
        element: <UserLayout/>,
        children: [
          {
        index: true, element: <UserDashboard/>
      },
           {
    path: "profile", element: <ProfilePage />,
       },
       {
        path: "wishList", element: <WishListPage />
       },
       {
        path: "allUsers", element: <AllUsersPage />
       }
        ]
      }
      
    ]
  },



    //rutas privadas del admin
  {
    path: "/admin", element:<PrivateRoutes requiredType={2}/>,
    children: [
     {
      element: <AdminLayout/>, 
    children: [
       {
        index: true, element: <AdminDashboard />
      },
      {
        path: 'products', element: < AdminProductsPage/> 
      },
      {
    path: "editProduct/:id", element: <EditProduct/>,
      },
       {
    path: "createProduct", element: <CreateProduct />,
       },
    ]
     }
    ]
  },


  //evita rutas de error o rotas
  {
    path: '*',
    element: <Navigate to='/'/>
  }   
]);







