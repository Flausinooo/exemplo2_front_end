
const Aluno = (props) => {
  return (
    <>
    <h5>Props</h5>
      <p>O Id do Usuário é:{props.id} </p>
      <p>O Nome do Usuário é:{props.nome}</p>
      <p>O Email do Usuário é:{props.email}</p>
      <p>O Telefone do Usuário é:{props.telefone}</p>
    </>
  )
}

export default Aluno
