import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useHistory } from "react-router-dom"
import InputMask from "react-input-mask";

import "./styles.css";

const Presentation = ({
  formik
}) => {
  let history = useHistory();

  return(
      <div className="homeContainer">
        <Header />
        <div className="formContainer">
          <div className="formTitleContainer">
            <p className="formTitle">Cadastro de Caso Voluntário</p>
          </div>
          <form  className="form" onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="formInput"
                  id="local"
                  name="local"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.local}
                  placeholder="Local"
                />
                <input
                  className="formInput"
                  id="hourAvailability"
                  name="hourAvailability"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.hourAvailability}
                  placeholder="Disponibilidade de horário"
                />
                <textarea
                  className="formInput"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="Descrição"
                />
              </div>
              <div className="col-6">
                <input
                  className="formInput"
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="E-mail do responsável"
                />
                <InputMask
                  mask="(99)9999-9999"
                  className="formInput"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  placeholder="Telefone do responsável"
                />
                <InputMask
                  mask="(99)99999-9999"
                  className="formInput"
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.whatsapp}
                  placeholder="Telefone celular/WhatsApp do responsável"
                />
              </div>
            </div>
            <div className="saveButtonContainer">
              <button type="submit" className="orangeButton">Salvar</button>
              <button onClick={() => history.push("/home")}className="orangeButton">Voltar</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Presentation;