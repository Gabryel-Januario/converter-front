# README.py - Front-end para Simple File Conversion API

Este é o front-end para a API "Simple File Conversion API", que permite ao usuário fazer upload de arquivos e convertê-los para o formato PDF. Ele se comunica com a API Flask que já foi descrita no README principal.

## Funcionalidades

- Envio de arquivos de diferentes tipos para o servidor (DOCX, Imagens, TXT, XLSX).
- Seleção do método de conversão (docx_to_pdf, image_to_pdf, txt_to_pdf, xlsx_to_pdf).
- Download do arquivo convertido em PDF.
- Interface simples e responsiva.

## Como usar

### Passo 1: Instalar dependências

Para instalar as dependências necessárias para o front-end, se estiver usando uma ferramenta como o `npm` ou `yarn`, você pode rodar:

npm install

Passo 2: Executar o servidor local
Para rodar o servidor de desenvolvimento, você pode usar o seguinte comando:

npm start
ou
yarn start

Isso iniciará o servidor local na URL http://localhost:3000 (pode variar dependendo de como você configurou).

Passo 3: Interação com a API
No front-end, o usuário poderá:

Selecionar o arquivo desejado para upload.
Escolher o método de conversão.
Submeter o arquivo ao servidor.
Após a conversão, o arquivo PDF gerado pode ser baixado diretamente através da interface.

Passo 4: Testar a conversão de arquivos
A interface permitirá que o usuário faça upload de:

- Arquivos DOCX
- Imagens
- Arquivos TXT
- Arquivos XLSX
  E a conversão para PDF ocorrerá automaticamente.

App.js: Componente principal que controla a lógica de envio de arquivos e interações com a API.

index.js: Ponto de entrada para a aplicação.

Contribuições
Sinta-se à vontade para contribuir para o projeto fazendo um fork e criando pull requests.

Licença
Este projeto está sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
