import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useHistory } from "react-router-dom"
import InputMask from "react-input-mask";

import "./styles.css";

const Presentation = ({
  formik,
  setImgValue,
  imgValue
}) => {
  let history = useHistory();

  return(
      <div className="homeContainer">
        <Header />
        <div className="formContainer">
          <div className="formTitleContainer">
            <p className="formTitle">Cadastro de Pet</p>
          </div>
          <form  className="form" onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="formInput"
                  id="petsName"
                  name="petsName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsName}
                  placeholder="Nome do pet"
                />
                {formik.errors.petsName && formik.touched.petsName ? (
                  <div className="errors">{formik.errors.petsName}</div>
                ) : null}
                <input
                  className="formInput"
                  id="petsAge"
                  name="petsAge"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsAge}
                  placeholder="Idade"
                />
                {formik.errors.petsAge && formik.touched.petsAge ? (
                  <div className="errors">{formik.errors.petsAge}</div>
                ) : null}
                <input
                  className="formInput"
                  id="petsBreed"
                  name="petsBreed"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsBreed}
                  placeholder="Raça"
                />
                {formik.errors.petsBreed && formik.touched.petsBreed ? (
                  <div className="errors">{formik.errors.petsBreed}</div>
                ) : null}
                <textarea
                  className="formInput"
                  id="petsDescription"
                  name="petsDescription"
                  onChange={formik.handleChange}
                  value={formik.values.petsDescription}
                  placeholder="Descrição"
                />
                {formik.errors.petsDescription && formik.touched.petsDescription ? (
                  <div className="errors">{formik.errors.petsDescription}</div>
                ) : null}
                <input
                  className="formFile"
                  type="file"
                  name="petsImg"
                  id="petsImg"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setImgValue(e.target.files[0])}
                />
                {formik.errors.petsImg && formik.touched.petsImg ? (
                  <div className="errors">{formik.errors.petsImg}</div>
                ) : null}
              </div>
              <div className="col-6">
                <input
                  className="formInput"
                  id="petsSpeecies"
                  name="petsSpeecies"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsSpeecies}
                  placeholder="Espécie"
                />
                {formik.errors.petsSpeecies && formik.touched.petsSpeecies ? (
                  <div className="errors">{formik.errors.petsSpeecies}</div>
                ) : null}
                <input
                  className="formInput"
                  id="petsResponsibleEmail"
                  name="petsResponsibleEmail"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsResponsibleEmail}
                  placeholder="E-mail do responsável"
                />
                 {formik.errors.petsResponsibleEmail && formik.touched.petsResponsibleEmail ? (
                  <div className="errors">{formik.errors.petsResponsibleEmail}</div>
                ) : null}
                <InputMask
                  mask="(99)9999-9999"
                  className="formInput"
                  id="petsResponsiblePhone"
                  name="petsResponsiblePhone"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsResponsiblePhone}
                  placeholder="Telefone do responsável"
                />
                {formik.errors.petsResponsiblePhone && formik.touched.petsResponsiblePhone ? (
                  <div className="errors">{formik.errors.petsResponsiblePhone}</div>
                ) : null}
                <InputMask
                  mask="(99)99999-9999"
                  className="formInput"
                  id="petsResponsibleWhatsApp"
                  name="petsResponsibleWhatsApp"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.petsResponsibleWhatsApp}
                  placeholder="Telefone celular/WhatsApp do responsável"
                />
                {formik.errors.petsResponsibleWhatsApp && formik.touched.petsResponsibleWhatsApp ? (
                  <div className="errors">{formik.errors.petsResponsibleWhatsApp}</div>
                ) : null}
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