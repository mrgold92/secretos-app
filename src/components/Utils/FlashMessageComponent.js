import "./flashMessage.css";

const FlashMessage = ({ success, message }) => {
  return (
    <div className={"flashMessage " + success }>
      <span>{message}</span>
    </div>
  );
};

export default FlashMessage;
