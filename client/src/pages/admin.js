//Incluir filtragem de dados e barra de busca, estilização, restringir métodos conforme classe do usuário, proteger rota por login

import React, { useEffect, useContext } from "react";
import Axios from "axios"; //Usado para fazer as requisições
import { useState } from "react";
import "../App.css";
import { AuthContext } from "../contexts/auth";
import {Table, Button} from 'react-bootstrap';
//import {Container, Nav, Navbar, Navdropdown} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';



 function Admin(){

  //importa a função logout do contexto (Não está sendo usado)
  const {logout, user} = useContext(AuthContext);
  
  //Configura a conexão do axios com a api, incluindo o token no cabeçalho.
  const apiConection = Axios.create({
    baseURL: 'http://localhost:8000/pessoas/',
    timeout: 1000,
    //headers: {'Authorization': 'Bearer '+user}
  });

  const handleDelete = (id) => {
    if (window.confirm("Deseja realmente excluir o registro selecionado?")){
       apiConection.delete(`${id}/`); //Faz a chamada para deletar o registro no servidor
       window.location.reload();
    }
  }

  
  const [listPessoas, setListPessoas] = useState([]);

  //Executado quando a página é carregada, faz a requisição para buscar os dados de todos os monitorados.
  useEffect (() =>{
    apiConection.get("").then((response) => {
      setListPessoas(response.data);
    });
  }, []);

  function handleLogout() {
    logout(); //chama a função importada do contexto (Não é usada)
  };

  

  return (
      <div>
        <div>
          {/*<button onClick={handleLogout}>Sair</button>*/}
          <button onClick={() => window.open('http://localhost:3000/cadastro/', "_self")}>Novo caso</button>
        </div>
        <div>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Sexo</th>
              <th>Nascimento</th>
              <th>CPF</th>
              <th>Nome da mãe</th>
              <th>Endereço</th>
              <th>Obs</th>
              <th>Data do cadastro</th>
              <th>Última alteração</th>
              <th>Cadastrado por</th>
            </tr>
          </thead>
          <tbody>
            {listPessoas.map((pessoa) =>
                <tr key={pessoa.id}>
                  <td>{pessoa.id}</td> 
                  <td>{pessoa.nome}</td> 
                  <td>{pessoa.sexo}</td>
                  <td>{pessoa.dataDeNascimento}</td> 
                  <td>{pessoa.cpf}</td> 
                  <td>{pessoa.nomeDaMae}</td>
                  <td>{pessoa.endereco}</td> 
                  <td>{pessoa.observacao}</td> 
                  <td>{pessoa.dataDoCadastro}</td>
                  <td>{pessoa.dataUltimaAtualizacao}</td> 
                  <td>{pessoa.cadastradoPor}</td> 
                  <td>  
                    <Button variant="success" onClick={() => window.open(`http://localhost:3000/cadastro/${pessoa.id}/`, "_self")}>Atualizar</Button>
                    <Button variant="danger" onClick={() => handleDelete(pessoa.id)}>Excluir</Button>
                  </td>
                </tr>
            )}
          </tbody>
          </Table>
        </div>     
    </div>   
    )      
}

export default Admin;