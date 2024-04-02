import React, { useContext } from 'react';
import AppContext from './AppContext';

function Tela03() {
    const { nome, telefone, salarioBruto, descontoINSS, setExibirTela01, setExibirTela02, setExibirTela03,
    setNome, setTelefone, setValorHora, setHorasPorSemana} = useContext(AppContext);
    const salarioLiquido = (salarioBruto - descontoINSS).toFixed(2);

    const voltarTelaInicial = () => {
        setExibirTela01(false);
        setExibirTela02(false);
        setExibirTela03(false);
        setNome('');
        setTelefone('');
        setValorHora('');
        setHorasPorSemana('');
    };

  return (
    <div>
      <h2>Resultado:</h2>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Salário Bruto: R$ {salarioBruto}</p>
      <p>Valor descontado do INSS: R$ {descontoINSS}</p>
      <p>Salário Líquido: R$ {salarioLiquido}</p>
      <button onClick={voltarTelaInicial}>Voltar</button>
    </div>
    
  );
}

export default Tela03;