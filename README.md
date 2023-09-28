O projeto está dividido em frontend (client) e backend (server). 
No server foi criado um projeto em Django em conjunto com a biblioteca Django REST Framework para a criação de uma API que será usada no sistema. No Django temos uma estrutura: URL -> View -> Model -> Serializer. No arquivo url.py incluimos as rotas que são geradas automaticamente pelo Django REST Framework que mapeiam para as views também geradas pela biblioteca. Em models.py temos as definições das tabelas de banco de dados, por padrão o Django utiliza o SQLite, por enquanto estamos trabalhando somente com a tabela Pessoas que registra os casos. Por fim temos o arquivo serializer que define a forma que o Django REST Framework irá retornar os dados. User/Senha Django Admin: admin admin
Para instalar as dependências navegue até a pasta "server" no terminal e execute os seguintes comandos
python3 -m venv venv //Criar uma virtual env
source venv/bin/activate (Linux) //Ativar a venv
venv\Scripts\activate.bat(Windows)
pip install -r requirements.txt //Instalar todas as dependências listadas no arquivo requirements.txt

Para iniciar o servidor abra um terminal, navegue até a pasta server e rode os seguintes comandos
source venv/bin/activate (Linux) //Ativar a venv
venv\Scripts\activate.bat(Windows)
python manage.py runserver


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
