import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchCurrentUser} from "../../redux/operations"
import { lazy, Suspense } from "react";
import {PrivateRoute} from "components/PrivateRoute/PrivateRoute"
import {PublicRoute} from "components/PublicRoute/PublicRoute"
import {getRefreshing} from "../../redux/selectors"
import ModalAuth from "components/ModalAuth/ModalAuth"
import { useState } from "react"

const WelcomePage = lazy(() => import('../../page/WelcomePage/WelcomePage'));
const ContactsPage = lazy(() => import('../../page/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../../page/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../page/LoginPage/LoginPage'));



export const App = () => {
const dispatch = useDispatch()
const isRefreshing = useSelector(getRefreshing)

useEffect(() => {
  dispatch(fetchCurrentUser())}, [dispatch]);

  const [open, setOpen] = useState(true);

  return (
        <Layout>
          {isRefreshing ? (<h1>Загрузчик</h1>) : (
            <>
           <AppBar setOpen={setOpen}/>
           <Suspense fallback={<div>Loading...</div>}>  
           <Routes>
           <Route path="/" element={<WelcomePage />} />

           <Route path="/login" element={<PublicRoute redirectTo="/" component={ 
           <ModalAuth open={open} setOpen={setOpen}> 
             <LoginPage /> 
           </ModalAuth>} />} />


           <Route path="/register" element={<PublicRoute redirectTo="/" component={
           <ModalAuth open={open} setOpen={setOpen}>
            <RegisterPage />
            </ModalAuth>} />} />

           <Route path="/contacts" element={<PrivateRoute redirectTo="/register" component={<ContactsPage />} />} />
           </Routes>
           </Suspense>
            </>
          )}
          </Layout>)
};
