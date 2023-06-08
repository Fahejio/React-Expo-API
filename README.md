# React-Expo-API
Um App mobile simples que exibe nome e imagens de alguns filmes na tela com o uso de API.
<br/>
<br/>
<b>É necessário instalar:</b> React Native, NodeJS e Expo.
<br/>
<br/>
<b>Como rodar:</b>
<br/>
No Arquivo Api.js no caminho "FILmes API\src\Services" troque pelo seu Endereço IP
```JavaScript
const api = axios.create({
    baseURL: 'http:/Coloque seu Endereço IP:3000/'
});
```
Então Vá para "FIlmes API\src\Server" abra o terminal nesse caminho e rode o servidor com:
```
node Server.js
```
Se der certo aparecerá a mensagem "Servidor On"
<br/>
Na raiz do projeto abra o terminal e rode:
```
expo start
```
Escanei o QR Code no celular com o aplicativo Expo Go.
