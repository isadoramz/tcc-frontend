import * as Yup from 'yup';

const phoneRegExp = /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
 
 const caseFormValidation = Yup.object().shape({
  local: Yup.string()
      .required('Campo obrigatório'),
  adress: Yup.string()
      .required('Campo obrigatório'),
  hourAvailability: Yup.string()
    .required('Campo obrigatório'),
  title: Yup.string()
    .required('Campo obrigatório'),
  description: Yup.string()
    .max(400, 'Limite de 200 caracteres atingido')
    .required('Campo obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Insira um número de telefone válido'),
  whatsapp: Yup.string().matches(phoneRegExp, 'Insira um número de telefone válido'),
})


 export default caseFormValidation;