import React, { useEffect } from "react";
import Presentation from "./Presentation"
import casesService from "../../services/casesService";
// import petValidationSchema from "../../validations/petFormValidation";

import { useFormik } from 'formik';

const CaseForm = () => {

  const formik = useFormik({
    initialValues: {
      local: "",
      adress: "",
      weekDays: [],
      hourAvailability: "",
      title: "",
      description: "",
      email: "",
      phoneNumber: "",
      whatsapp: ""
    },
    // validationSchema: petValidationSchema,
    onSubmit: values => {
      const vCase = {
        local: values.local,
        adress: values.adress,
        weekDays: values.weekDays,
        hourAvailability: values.hourAvailability,
        title: values.title,
        description: values.description,
        responsible: {
          email: values.email,
          phoneNumber:  values.phoneNumber,
          whatsapp: values.whatsapp,
        }
      }
      console.log(vCase)
      casesService.createCase(vCase)
    },
  });

  useEffect(() => {
    console.log(formik.initialValues.petsImg)
  }, [formik.initialValues.petsImg])

    
    return(
      <Presentation
        formik={formik}
      />
    )
}

export default CaseForm;