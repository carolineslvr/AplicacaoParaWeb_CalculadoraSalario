import React, { useContext } from 'react';
import AppContext from './AppContext';


function Tela02 () {
    const { valorHora, horasPorSemana, setValorHora, setHorasPorSemana, calcularSalarioBruto,
        setExibirTela02, setExibirTela03 } = useContext(AppContext);

    const avancarParaTela03 = () => {
        if (valorHora === "" || horasPorSemana === "") {
            alert("Para avançar os campos Valor da hora e Horas trabalhadas precisam estar preenchidos.");
        } else {
            setExibirTela02(false);
            setExibirTela03(true);
            calcularSalarioBruto();
            }
          };

  return (
    <div>
      <h2>Informe o valor recebido por hora e quantidade de horas trabalhadas</h2>
      <div>
        <label>Valor da hora: </label>
        <input type="number" value={valorHora} 
        onChange={(e) => setValorHora(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Horas trabalhadas: </label>
        <input type="number" value={horasPorSemana} 
        onChange={(e) => setHorasPorSemana(parseInt(e.target.value))} />
      </div>
        <button onClick={avancarParaTela03}>Concluir</button>
    </div>
  );
}
export default Tela02;