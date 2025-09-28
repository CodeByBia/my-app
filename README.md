# My App - Jogo da Forca

Este é um aplicativo mobile desenvolvido com **React Native** e **Expo**, implementando um simples **jogo da forca**.

## Pré-requisitos

- Node.js >= 18
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go instalado no celular (iOS ou Android)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/my-app.git
cd my-app
Instale as dependências:

bash
Copiar código
npm install
# ou
yarn install
Rodando o app
Inicie o Metro Bundler:

bash
npx expo start --tunnel
# ou
npm run tunnel
Abra o Expo Go no seu celular.

Escaneie o QR Code que aparece no terminal ou no navegador.

O app será carregado e atualizado automaticamente a cada alteração.

Publicação / Compartilhamento
Para gerar um link público que funcione no Expo Go:

bash
npm install -g eas-cli
eas login
eas update:configure
eas update --branch main --message "primeira publicação"
