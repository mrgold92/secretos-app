import "../Main/secreto.css";
import boy from "../../img/baby-1399332_640.jpg";

const Secreto = ({fecha, secreto}) => {
  return (
      <div className="card-secret">
        <img src={boy} alt="img perfil" />
        <span className="name">{fecha}</span>
        <span className="secret">Mi secreto es... {secreto}</span>
      </div>
  );
};

export default Secreto;
