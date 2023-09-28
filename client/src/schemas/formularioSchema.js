import * as Yup from 'yup';
//Arquivo com as validações do formulário

export default Yup.object().shape({
    nome: Yup       
        .string()
        .required("Campo é obrigatório")
        .min(3,"O nome deve ter ao menos 3 caracteres")
        .max(100,"O campo não deve exceder 100 caracteres"),
    sexo: Yup
        .string()
        .required("Campo é obrigatório"),
    dataDeNascimento: Yup
        .date()
        .nullable()
        .max(new Date(),"Não é possível inserir uma data futura"),
    cpf: Yup
        .string(),
    nomeDaMae: Yup       
        .string()
        .required("Campo é obrigatório")
        .min(3,"O nome deve ter ao menos 3 caracteres")
        .max(100,"O campo não deve exceder 100 caracteres"),
    endereco: Yup
        .string()
        .max(300,"O campo não deve exceder 300 caracteres"), 
    observacao: Yup       
        .string()
        .max(100,"O campo não deve exceder 600 caracteres"),
})