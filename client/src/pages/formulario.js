//Validação CPF, mascara nos campos de CPF

import React, {useState, useEffect, useContext} from "react";
import "../App.css";
import "../styles/Formulario.css"
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useParams } from "react-router-dom";
import schema from "../schemas/formularioSchema";
import { AuthContext } from "../contexts/auth";

  
function Formulario(){
  
  //Importa o token do contexto para poder buscar os dados do usuário (Não usado)
  const {user, loading} = useContext(AuthContext);

  //Configura a conexão do axios com a API incluindo o token no cabeçalho
  const apiConection = Axios.create({
    baseURL: 'http://localhost:8000/pessoas/',
    timeout: 1000,
    //headers: {'Authorization': 'Bearer '+user}
  });
    
    //Captura o id da Pessoa passado por parâmetro na URL
    const idPessoa = useParams();
    

    const [dadosPessoa, setDadosPessoa] = useState({
          nome: '',
          sexo: 'M',
          dataDeNascimento: null,
          cpf: '',
          nomeDaMae: 'IGNORADO',
          endereco: '',
          observacao: '',
          dataDoCadastro: '',
          dataUltimaAtualizacao: '',
          cadastradoPor: '123.456.789-00',//Buscar usuário nos dados da sessão
    });


    //Busca os dados do Pessoa com o id passado por parâmetro
    useEffect (() =>{
      /*if (!loading){ //Faz a requisição somente depois de recuperar os dados da sessão no localStorage*/
        if (JSON.stringify(idPessoa) !== "{}"){ //verifica se o objeto não está vazio
          apiConection.get(`${idPessoa.id}/`) //faz a requisição GET
            .then((response)=>{
              setDadosPessoa(response.data);
            })     
        }    
    }, []); 
 // }, [loading]); //Executa toda vez que o status loading muda.
  

    const handleSubmit = (values, actions) => {
      /*console.log(values);
      //Transformar strings vazias em null para não dar problema de tipo no banco de dados. Se inicializar com null não consegui fazer o Yup rodar as validações
      const newValues = {...values};
      for(let key in newValues){
        if(newValues[key]==='') newValues[key] = null;
      }
      console.log(newValues);*/
    
      Axios.post("http://localhost:8000/pessoas/", {
        nome: values.nome,
        sexo: values.sexo,
        dataDeNascimento: values.dataDeNascimento,
        cpf: values.cpf,
        nomeDaMae: values.nomeDaMae,
        endereco: values.endereco,
        observacao: values.observacao,
        cadastradoPor: values.cadastradoPor,
      }).then((response) => {
        //alert(response.data.msg);
        console.log(response);
        window.location.reload()
      });
    };

    return (
      <div> 
        <Formik 
          onSubmit={handleSubmit}
          enableReinitialize={true}
          validationSchema={schema}
          initialValues={{
            nome: dadosPessoa.nome,
            sexo: dadosPessoa.sexo,
            dataDeNascimento: dadosPessoa.dataDeNascimento,
            cpf: dadosPessoa.cpf,
            nomeDaMae: dadosPessoa.nomeDaMae,
            endereco: dadosPessoa.endereco,
            observacao: dadosPessoa.observacao,
            dataDoCadastro: dadosPessoa.dataDoCadastro,
            dataUltimaAtualizacao: dadosPessoa.dataUltimaAtualizacao,
            cadastradoPor: dadosPessoa.cadastradoPor,
          }}
        > 
          {props => (
            <Form>
              <label>Novo Caso</label>
              <label htmlFor="nome">Nome completo:</label>
                    <Field
                      type="text"
                      id="nome"
                      name="nome"
                    />
                <ErrorMessage
                  component="span"
                  name="nome"
                  className="form-error"
                />

              <label htmlFor="sexo">Sexo:</label>
                    <Field as='select'
                      id="sexo"
                      name="sexo">
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="I">Ignorado</option>
                    </Field>
                <ErrorMessage
                  component="span"
                  name="sexo"
                  className="form-error"
                />

              <label htmlFor="dataDeNascimento">Data de nascimento:</label>
                    <Field
                      type="date"
                      id="dataDeNascimento"
                      name="dataDeNascimento"
                    />
                <ErrorMessage
                  component="span"
                  name="dataDeNascimento"
                  className="form-error"
                />

              <label htmlFor="cpf">CPF:</label>
                    <Field
                      type="text"
                      id="cpf"
                      name="cpf"
                    />
                <ErrorMessage
                  component="span"
                  name="cpf"
                  className="form-error"
                />

              <label htmlFor="nomeDaMae">Nome da mãe:</label>
                    <Field
                      type="text"
                      id="nomeDaMae"
                      name="nomeDaMae"
                    />
                <ErrorMessage
                  component="span"
                  name="nomeDaMae"
                  className="form-error"
                />

              <label htmlFor="endereco">Endereço completo:</label>
                    <Field
                      type="text"
                      id="endereco"
                      name="endereco"
                    />
                <ErrorMessage
                  component="span"
                  name="endereco"
                  className="form-error"
                />

              <label htmlFor="observacao">Observações:</label>
                    <Field
                      type="text"
                      id="observacao"
                      name="observacao"
                    />
                <ErrorMessage
                  component="span"
                  name="observacao"
                  className="form-error"
                />

              <button type="submit">Enviar</button>
            </Form>
        )}
        </Formik>
          

      </div>  
    );
}

export default Formulario;