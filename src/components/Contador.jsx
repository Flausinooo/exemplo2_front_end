import {useState} from 'react'

const Contador = () => {

    //Hook- useState - Manipula o estado da variável
    const [contador,setContador]=useState(41);

  return (
    <>
      <h1>Contagem Inicial:{contador}</h1>
      <button onClick={()=>setContador(contador +41)}>Aumentar</button>
      <button onClick={() => setContador(contador - 41)}>Diminuir</button>

    </>
  )
}

export default Contador
