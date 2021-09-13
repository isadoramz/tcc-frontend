import React, { useEffect } from "react";
import Presentation from "./Presentation"
import casesService from "../../services/casesService";
import caseValidationSchema from "../../validations/caseFormValidation";

import { useFormik } from 'formik';

const CaseForm = () => {

  const formik = useFormik({
    initialValues: {
      local: "",
      adress: "",
      hourAvailability: "",
      title: "",
      description: "",
      email: "",
      phoneNumber: "",
      whatsapp: ""
    },
    validationSchema: caseValidationSchema,
    onSubmit: values => {
      const vCase = {
        local: values.local,
        adress: values.adress,
        hourAvailability: values.hourAvailability,
        title: values.title,
        description: values.description,
        responsible: {
          email: values.email,
          phoneNumber:  values.phoneNumber,
          whatsapp: values.whatsapp,
        }
      }
      casesService.createCase(vCase)
    },
  });
    
    return(
      <Presentation
        formik={formik}
      />
    )
}

export default CaseForm;