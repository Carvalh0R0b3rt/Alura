import "./Formulario.css";
import CampoTexto from "../CampoTexto/index"; // Importing CampoTexto component
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () =>{

  const times = [
          'Programação',
          'Front-End',
          'Data Science',
          'DevOps',
          'UX e Design',
          'Mobile',
          'Inovação e Gestão'         
  ]    
  //Não podemos esquecer de usar a tag return() dentro da função para garantir
  //que o componente seja exportado e renderizado corretamente pelo React.
  //Transferiemos todos os campos de texto do App.js para dentro de um formulário,
  //Assim podemos compartimentar e editar ele em um container adequado.
  return (
    <section className="formulario">
      <form>
        <h2>Preencha abaixo os dados do card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />

        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />

        <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem"/>
        <ListaSuspensa label="Time" itens={times}/>

        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;