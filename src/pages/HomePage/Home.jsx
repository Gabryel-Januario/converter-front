import React from "react"
import "./style.css"
import Button from "../../components/Button"

import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/upload/{method}")
  }

  return (
    <>
      <h1>Bem-vindo ao PDF Express</h1>
      <div id="buttons">
        <Button 
          onClick={handleClick}
          class="button"
          title={"Word para PDF"}
          description={"docx para pdf"}
        />
        <Button 
          onClick={handleClick}
          class="button"
          title={"Imagem para PDF"}
          description={"svg, png para pdf"}
        />
        <Button
          onClick={handleClick}
          class="button"
          title={"Excel para PDF"}
          description={"xlsx para pdf"}
        />
        <Button
          onClick={handleClick}
          class="button"
          title={"Texto para PDF"}
          description={"txt para pdf"}
        />
      </div>
    </>
  )
}

export default HomePage
