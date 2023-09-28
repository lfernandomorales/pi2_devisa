//Cria o contexto para armazenar as informações de login entre todas a páginas da aplicação

import React, {createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


//cria o contexto
export const AuthContext = createContext();

//define as variáveis e métodos que estarão disponíveis no contexto
//Para os dados estarem disponíveis é necessário que o elemento esteja envolto pelo contexto, por isso a função recebe um 'children'
export const AuthProvider = ({children}) => {
    const navigate = useNavigate(); //Usado para redirecionar entre páginas sem fazer o recarregamento
    const [user, setUser] = useState(null); //Token do usuário logado
    const [loading, setLoading] = useState(true); //useEffect não é uma função assíncrona, por isso definimos um state de loading que está acessível para todas as páginas para usar de flag enquanto estiver carregando os dados
    const [authenticated, setAuthenticated] = useState(false); 

    //useEffect é rodado toda vez que uma página é carregada, aqui é utilizada para recuperar os dados de login armazenados no navegador
    useEffect(() => {
        (async ()=>{

            const recoveredUser = localStorage.getItem('user');

            if(recoveredUser) {
                
                await Axios.post("http://localhost:3001/validateToken", {
                    recoveredUser,
                }).then((response) => {
                    var isUserAuthenticated = response.data.authenticated;
                    setAuthenticated(isUserAuthenticated);
                    if (isUserAuthenticated === true) setUser(recoveredUser);
                });
                
            }
            setLoading(false);
        })();
        
    }, []);
    
    //Função que realiza o login
    const login = (email, password) => {
       
        Axios.post("http://localhost:3001/admLogin", {
            email, password,
          }).then((response) => {
            const token = response.data.token;
            localStorage.setItem("user", token); //Armazena os dados recebidos da API para que não se perca o login ao atualizar a página
            setUser(token);
            setAuthenticated(true);
            navigate('/admin');
          });
    };

    //Remove os dados do login
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setAuthenticated(false);
        navigate('/login');
    };

    return( //Retorna um elemento envolto pelo contexto, diponibilizando assim os valores para esses elementos.
        <AuthContext.Provider 
            value={{authenticated, user, loading, login, logout}}> 
            {children}
        </AuthContext.Provider>
    );

}