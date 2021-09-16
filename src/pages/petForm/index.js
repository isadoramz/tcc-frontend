import React, { useEffect } from "react";
import Presentation from "./Presentation"
import petsService from "../../services/petsService";
import petValidationSchema from "../../validations/petFormValidation";

import { useFormik } from 'formik';

const PetForm = () => {
  const [imgValue, setImgValue] = React.useState();

  const formik = useFormik({
    initialValues: {
      petsName: "",
      petsAge: "",
      petsBreed: "",
      petsSpeecies: "",
      petsDescription: "",
      petsResponsibleEmail: "",
      petsResponsiblePhone: "",
      petsResponsibleWhatsApp: "",
    },
    validationSchema: petValidationSchema,
    onSubmit: async values => {
      const petImg = await toBase64(imgValue)
      const pet = {
        name: values.petsName,
        breed: values.petsBreed,
        age:   values.petsAge,
        speecies: values.petsSpeecies,
        description: values.petsDescription,
        responsible: {
          email: values.petsResponsibleEmail,
          phoneNumber:  values.petsResponsiblePhone,
          whatsapp: values.petsResponsibleWhatsApp,
        },
        img: petImg
      }
      petsService.createPet(pet)
      alert("Pet cadastrado!")

    },
  });

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

    
    return(
      <Presentation
        formik={formik}
        imgValue={imgValue}
        setImgValue={setImgValue}
      />
    )
}

export default PetForm;