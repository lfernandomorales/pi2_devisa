//Página de login para acessar a página de interface com o banco de dados.

import React, {useContext} from "react";
import { AuthContext } from "../contexts/auth";
import "../App.css";
import logo from "../images/logo.png";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";


function App() {

  const {login} = useContext(AuthContext);

  const handleLogin = (values) => {
    
    const email = values.email;
    const password = values.password;
    login(email, password);
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

    return (
    <div className="container">
    <img src={logo} alt="Logo" className="logo" />
     <h1>Login</h1>
       <Formik
       initialValues={{email: '', password: ''}}
       onSubmit={handleLogin}
       validationSchema={validationsLogin}
     >
       <Form className="login-form">
         <div className="login-form-group">
           <Field name="email" className="form-field" placeholder="Email" />

           <ErrorMessage
             component="span"
             name="email"
             className="form-error"
           />
           
         </div>
         {/*Outro campo*/}
         <div className="form-group">
           <Field type="password" name="password" className="form-field" placeholder="Senha" />

           <ErrorMessage
             component="span"
             name="password"
             className="form-error"
           />
         </div>

         <button className="button" type="submit">
           Login
         </button>
       </Form>
     </Formik>

      <footer className="footer">
      <a href="https://github.com/paulocp-tech"><i className="fab fa-github"></i> paulocp-tech </a>
      <a href="https://github.com/lfernandomorales"><i className="fab fa-github"></i> lfernandomorales </a>
      <a href="https://github.com/marcelocsn"><i className="fab fa-github"></i> marcelocsn </a> © 2023 - Todos os direitos reservados.
    </footer>
    </div>
  );
}

export default App;