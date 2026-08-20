
import Aluno from'./components/Aluno'
import Dados from'./components/Dados'
import Contador from'./components/Contador'

const App = () => {
  return (
    //fragments
    <>
      <Aluno id=" RM572486" nome=" Gabriel Flausino " email=" gabriel.ferreira.flausino " telefone=" 11 94715-9307"/>
      <Dados nome=" Gabriel Ferreira" descricao=" Futuro Engenheiro de Software" data="20/08/2026"/>
      <Contador/>
  </>
  )
}

export default App
