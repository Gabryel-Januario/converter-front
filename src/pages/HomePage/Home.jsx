import React from "react"
import "./style.css"
import Method from "../../components/Methods"
import pdfImage from "../../resources/pdf.png"
import Header from "../../components/Header"

import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = (method) => {
    navigate("/upload", { state: { method } })
  }

  return (
    <>
      <Header />
      <h1>Bem-vindo ao PDF Express</h1>
      <div className="image-container">
        <img src={pdfImage} alt="imagem de um arquivo PDF" />
      </div>
      <div id="buttons">
        <Method
          method={"docx_to_pdf"}
          onClick={() => handleClick("docx_to_pdf")}
          class="button"
          title={"Word para PDF"}
          description={"docx para pdf"}
        />
        <Method
          method={"image_to_pdf"}
          onClick={() => handleClick("image_to_pdf")}
          class="button"
          title={"Imagem para PDF"}
          description={"svg, png para pdf"}
        />
        <Method
          method={"xlsx_to_pdf"}
          onClick={() => handleClick("xlsx_to_pdf")}
          class="button"
          title={"Excel para PDF"}
          description={"xlsx para pdf"}
        />
        <Method
          method={"txt_to_pdf"}
          onClick={() => handleClick("txt_to_pdf")}
          class="button"
          title={"Texto para PDF"}
          description={"txt para pdf"}
        />
      </div>
    </>
  )
}

export default HomePage
