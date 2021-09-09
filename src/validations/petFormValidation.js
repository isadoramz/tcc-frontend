import * as Yup from 'yup';

const phoneRegExp = /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
 
 const petFormValidation = Yup.object().shape({
  petsName: Yup.string()
      .required('Campo obrigatório'),
  petsAge: Yup.string()
      .required('Campo obrigatório'),
  petsAge: Yup.string()
    .required('Campo obrigatório'),
  petsBreed: Yup.string()
    .required('Campo obrigatório'),
  petsSpeecies: Yup.string()
    .required('Campo obrigatório'),
  petsDescription: Yup.string()
    .max(200, 'Limite de 200 caracteres atingido')
    .required('Campo obrigatório'),
  petsResponsibleEmail: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
  petsResponsiblePhone: Yup.string().matches(phoneRegExp, 'Insira um número de telefone válido'),
  petsResponsibleWhatsApp: Yup.string().matches(phoneRegExp, 'Insira um número de telefone válido'),
})


 export default petFormValidation;