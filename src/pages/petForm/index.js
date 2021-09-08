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
    onSubmit: values => {
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
        img: imgValue
      }
      console.log(pet)
      petsService.createPet(pet)
    },
  });

  useEffect(() => {
    console.log(formik.initialValues.petsImg)
  }, [formik.initialValues.petsImg])

    
    return(
      <Presentation
        formik={formik}
        imgValue={imgValue}
        setImgValue={setImgValue}
      />
    )
}

export default PetForm;