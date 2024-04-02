import React, { useContext } from 'react';
import AppContext from './AppContext';

function Tela01 () {
    const {nome, telefone, setNome, setTelefone, setExibirTela01, setExibirTela02} = useContext(AppContext);

    const avancarParaTela02 = () => {
        if (nome.trim() === "" || telefone.trim() === "") {
          alert("Para avançar os campos nome e telefone precisam estar preenchidos.");
        } else {
          setExibirTela01(false);
          setExibirTela02(true)
        }
      };
    
  return (
    <div>
      <h2>Informe seu nome e telefone:</h2>
      <br></br>
      <div>
        <label>Nome: </label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} maxLength={50}/>
      </div>
      <div>
        <label>Telefone: </label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={11} />
      </div>
      <button onClick={avancarParaTela02}>Avançar</button>
    </div>
  );
}

export default Tela01;