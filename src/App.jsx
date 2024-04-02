import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import Tela01 from "./Tela01";
import Tela02 from "./Tela02";
import Tela03 from "./Tela03"; 

function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horasPorSemana, setHorasPorSemana] = useState('');
  const [valorHora, setValorHora] = useState('');
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [descontoINSS, SetDescontoINSS] = useState(0);
  const [exibirTela01, setExibirTela01] = useState(false);
  const [exibirTela02, setExibirTela02] = useState(false);
  const [exibirTela03, setExibirTela03] = useState(false);

  const calcularDescontoINSS =(salario) => {
      let valorINSS = 0.00;
      if (salario <= 1302.00){
        valorINSS = salario * 0.075;        
      } else if (salario > 1302.00 && salario <= 2571.29){
        valorINSS = salario * 0.09;
      } else if (salario > 2571.29 && salario <= 3856.94){
        valorINSS = salario * 0.12;
      } else if (salario > 3586.94 && salario <= 7507.49){
        valorINSS = salario * 0.14;
      } else {
        valorINSS = 1051.04
      }
      SetDescontoINSS(valorINSS.toFixed(2));
  }

  const calcularSalarioBruto = () => {
    const salario = horasPorSemana * valorHora * 5;
    setSalarioBruto(salario.toFixed(2));
    calcularDescontoINSS(salario);
  }
  return (
    <AppContext.Provider value={{nome, setNome, telefone, setTelefone, horasPorSemana, setHorasPorSemana, 
    valorHora, setValorHora, salarioBruto, setSalarioBruto, descontoINSS, SetDescontoINSS, exibirTela01, 
    setExibirTela01, exibirTela02, setExibirTela02, exibirTela03, setExibirTela03, calcularSalarioBruto}}>
    <div className="App">
      {exibirTela01 && <Tela01 />}
      {exibirTela02 && <Tela02 />}
      {exibirTela03 && <Tela03 />}
      {!exibirTela01 && !exibirTela02 && !exibirTela03 && (
          <>
            <h1>Bem-vindo a calculadora de Salário</h1>
            <button onClick={() => setExibirTela01(true)}>Iniciar</button>
          </>
        )}
        
      </div>
      
    </AppContext.Provider>
    
  );
}

export default App;
