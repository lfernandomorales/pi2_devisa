O projeto está dividido em frontend (client) e backend (server). 
No server foi criado um projeto utilizando o framework FastAPI, por enquanto temos uma implementação básica seguindo a documentação oficial do framework. No arquivo databases.py temos as definições da conexão com o banco de dados. Estamos utilizando o SQLite por simplicidade sem deixar de antender as necesssidades do projeto. O FastAPI utiliza o SQLAlchemy como ORM que mapeia as classes definidas em models.py para tabelas no banco de dados. Também temos o pydantic que é responsável pelas validações dos dados, a definição dos objetos estão no arquivo schemas.py. Em functions.py temos as definições de funções que serão usadas no main.py onde estão implementados os endpoints do FastAPI.

Para instalar as dependências navegue até a pasta "server" no terminal e execute os seguintes comandos

python3 -m venv venv //Criar uma virtual env

source venv/bin/activate (Linux) //Ativar a venv
venv\Scripts\activate.bat(Windows)

pip install -r requirements.txt //Instalar todas as dependências listadas no arquivo requirements.txt

O FastAPI é construído em cima do Uvicorn, para iniciar o servidor abra um terminal, navegue até a pasta server e rode os seguintes comandos
source venv/bin/activate (Linux) //Ativar a venv
venv\Scripts\activate.bat(Windows)

uvicorn main:app --reload


No frontend temos um projeto em React JS inicialmente usado apenas para testar as funcionalidades da API. 
Para rodar abra um terminal e navegue até a pasta client
Para instalar as dependências é necessário ter o Node.js instalado, abra a pasta client em um terminal e execute:

npm install -g yarn

yarn install //Instala as dependências


Para iniciar o servidor local execute

yarn start

Após rodar o comando acima deverá abrir a página http://localhost:3000 que é um pequeno CRUD da tabela de casos. Na rota /cadastro temos um formulário para inserir novos casos
Os formulários foram construidos utilizando a biblioteca Formik e as validações foram feitas como o Yup
Login ainda não está implementado
