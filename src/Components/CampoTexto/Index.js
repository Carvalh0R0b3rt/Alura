import "./CampoTexto.css";

const CampoTexto = (props) => {

        //Para concatenar uma string em uso de props com placeholder e outras propriedades:
        //Javascript não é React! Abaixo estamos usando acentos graves ao invés de aspas simples ou duplas.
  const placeholderModificada = `${props.placeholder}...`;
        //então basta usar a variável placeholderModificada no input.
        //outra forma de fazer isso é usar o operador lógico "||" para definir um valor padrão caso props.placeholder não seja fornecido; 

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
