preparar o ambiente backend:

cd task-manager
npm init -y
npm install express body-parser
npm install typescript ts-node @types/node @types/express --save-dev
npx tsc --init

iniciar aplicacao backend:

npm start
_____________________________________________________________________________

preparar o ambiente frontend:

npx create-react-app task-manager-frontend --template typescript
cd task-manager-frontend
npm install axios

_____________________________________________________________________________

executar a build:

npm run build

_____________________________________________________________________________

iniciar aplicacao frontend:

npm start
