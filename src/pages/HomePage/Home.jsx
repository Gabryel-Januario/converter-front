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
      <h2>Conversões de arquivos sem complicação no PDF Express</h2>
      <div className="image-container">
        <img src={pdfImage} alt="imagem de um arquivo PDF" />
      </div>
      <div id="buttons">
        <Method
          method={"docx_to_pdf"}
          onClick={() => handleClick("docx_to_pdf")}
          class="button"
          title={"Word para PDF"}
          description={"Converta documentos do Word para PDF com precisão e rapidez."}
        />
        <Method
          method={"image_to_pdf"}
          onClick={() => handleClick("image_to_pdf")}
          class="button"
          title={"Imagem para PDF"}
          description={"Transforme suas imagens em arquivos PDF de alta qualidade."}
        />
        <Method
          method={"xlsx_to_pdf"}
          onClick={() => handleClick("xlsx_to_pdf")}
          class="button"
          title={"Excel para PDF"}
          description={"Converta suas planilhas do Excel em PDFs organizados e prontos para compartilhar."}
        />
        <Method
          method={"txt_to_pdf"}
          onClick={() => handleClick("txt_to_pdf")}
          class="button"
          title={"Texto para PDF"}
          description={"Transforme arquivos de texto simples em documentos PDF profissionais."}
        />
      </div>
    </>
  )
}

export default HomePage
