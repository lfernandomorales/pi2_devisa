import React, {useContext} from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
//import Home from './pages/home';
import Cadastro from "./pages/formulario";
import Admin from "./pages/admin";
import { AuthProvider, AuthContext } from "./contexts/auth";


export default function MainRoutes()  {

    const Private = ({children})=>{
        const {authenticated, loading} = useContext(AuthContext); //Acessa o contexto

        //Se estiver com loading == true exibe carregando
        if(loading) {
            return <div className="loading">Carregando...</div>
        }
        //Se não estiver logado redireciona para o login
        if(!authenticated) {
            return <Navigate to="/login"/>;
        }
        //Se passar pelo if acima renderiza a página
        return children;
    };

    //Os elementos envoltos por <Private> passam pela lógica implementada acima
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element = {<Admin/>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path="/cadastro/:id?" element = {<Cadastro/>}/>
                <Route path="/admina" element = {<Private><Admin/></Private>}/> 
            </Routes>
        </AuthProvider>
    );
}