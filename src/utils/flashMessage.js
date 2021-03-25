import FlassMessageComponent from "../components/Utils/FlashMessageComponent";

const flashMessage = ({mensaje, success,}) => {

  const e = success==='success' ? "success" : "error";

  return <>

    <FlassMessageComponent success={e} message={mensaje} />
  </>;
};

//este es el que tenemos que importar en el main
export default flashMessage;
