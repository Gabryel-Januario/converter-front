import React from "react"
import "./style.css"
import Button from "../../components/Button"
import Header from "../../components/Header"

import { useLocation } from "react-router-dom"

const DownloadPage = () => {
  const location = useLocation()
  const filename = location.state?.filename

  const filenamePDF = filename.substring(0, filename.lastIndexOf(".")) + ".pdf"

  const handleDownload = async () => {
    if (!filename) {
      alert("Nome do arquivo para download não encontrado.")
      return
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/download/${filenamePDF}`,
        {
          method: "GET",
        }
      )

      if (response.ok) {
        const blob = await response.blob()

        const url = window.URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = filenamePDF
        document.body.appendChild(a)
        a.click()

        a.remove()
        window.URL.revokeObjectURL(url)
      } else {
        alert(`Erro ao baixar o arquivo. Status: ${response.status}`)
      }
    } catch (err) {
      console.error("Erro inesperado:", err)
      alert(`Erro inesperado ao tentar baixar o arquivo. Error: ${err.message}`)
    }
  }

  return (
    <>
      <Header />

      <Button title={"Faça o download do arquivo"} onClick={handleDownload} />
    </>
  )
}

export default DownloadPage
