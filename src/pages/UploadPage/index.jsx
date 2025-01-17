import React, { useRef } from "react"
import "./style.css"
import Input from "../../components/input"
import Button from "../../components/Button"
import Header from "../../components/Header"

import { useLocation, useNavigate } from "react-router-dom"

const UploadPage = () => {
  const location = useLocation()
  const method = location.state?.method
  const navigate = useNavigate()

  const fileInputRef = useRef(null)

  const handleUpload = async () => {
    const file = fileInputRef.current?.files[0]
    if (!file) {
      alert("Selecione um arquivo antes de enviar.")
      return { ok: false }
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("method", method)

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        const result = await response.json()
        alert(`Upload bem-sucedido: ${result.message}`)
        return {
          ok: true,
          message: result.message,
          filename: result.filename,
          method: method,
        }
      } else {
        const error = await response.json()
        alert(`Falha ao fazer o upload do arquivo. Error: ${error.error}`)
        return { ok: false, error: error.error }
      }
    } catch (err) {
      console.error(err)
      alert("Erro ao enviar arquivo.")
      return { ok: false, error: "Erro inesperado" }
    }
  }

  const handleConverter = async (filenamePV, methodPV) => {
    if (!filenamePV || !methodPV) {
      alert(
        "Parâmetros inválidos. Certifique-se de fornecer o arquivo e o método."
      )
      return { ok: false }
    }

    const method = methodPV
    const filename = filenamePV

    const payload = {
      method: method,
      filename: filename,
    }

    try {
      const response = await fetch("http://localhost:5000/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const result = await response.json()

        alert(`Conversão bem sucedida. Message: ${result.message} `)
        navigate("/download", { state: { filename } })
        return { ok: true, filename: filename }
      } else {
        const error = await response.json()
        alert(`Erro ao converter arquivo. Error: ${error.error}`)
        return { ok: false, error: error.error }
      }
    } catch (err) {
      console.error("Erro inesperado:", err)
      alert(`Erro inesperado. Error: ${err}`)
      return { ok: false }
    }
  }

  const handleSubmit = async () => {
    try {
      const uploadResponse = await handleUpload()

      if (uploadResponse.ok) {
        const filename = uploadResponse.filename
        const method = uploadResponse.method

        handleConverter(filename, method)
      } else {
        alert("Falha ao fazer o upload do arquivo")
      }
    } catch (err) {
      alert(`Falha ao converter o arquivo. Error: ${err}`)
    }
  }

  return (
    <>
      <Header />
      <h1>Faça o upload do seu arquivo!</h1>
      <div id="input">
        <Input label={"Arquivo Word(docx)"} ref={fileInputRef} />
      </div>
      <div className="centered">
        <Button title={"Converter"} onClick={handleSubmit} />
      </div>
    </>
  )
}

export default UploadPage
