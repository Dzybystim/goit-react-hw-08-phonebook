import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "../../page/ContactsPage/ContactsPage"
import WelcomePage from "../../page/WelcomePage/WelcomePage"
import RegisterPage from "../../page/RegisterPage/RegisterPage";
import LoginPage from "../../page/LoginPage/LoginPage";



export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchContacts());}, [dispatch])

  return <Layout>
           <AppBar />  
           <Routes>
             <Route path="/" element={<WelcomePage />} />
             <Route path="/contacts" element={<ContactsPage />} />
             <Route path="/register" element={<RegisterPage />} />
             <Route path="/login" element={<LoginPage />} />
           </Routes>
          </Layout>
};
