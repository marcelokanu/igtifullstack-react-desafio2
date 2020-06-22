<img src="juros-composto.gif" alt="juros-composto" width="100%">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Desafio`

1. Faça com que os três inputs do estado da aplicação sejam do tipo number para
conseguir manipular os dados com as setas “para cima” e “para baixo” do teclado.
2. Será cobrado nas questões apenas o valor do montante até 100.000 reais, taxa de
juros entre -12% e 12% ao mês e parcelas de 1 a 36.
3. Além dos três inputs, crie mais uma variável de estado que será responsável por
controlar as “parcelas”.
4. Faça a implementação do cálculo das parcelas com useEffect, utilizando como
deps as variáveis de estado referentes aos três inputs. Nesta implementação, eu
(Raphael Gomide) não reaproveitei o valor atual das parcelas.
5. Quebre a aplicação em quatro componentes: <App />, <Form /> (com os três
inputs), <Installments /> e <Installment /> (parcelas/parcela, em inglês).
6. Não deixem de assistir o vídeo de apresentação deste desafio, onde demonstro a
aplicação em funcionamento e dou mais algumas dicas.
