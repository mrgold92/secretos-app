import "./secreto.css";
import Secreto from "../Secreto/Secreto";
import { useState } from "react";
import fechaAhora from "../../utils/Fecha";

const secretoss = [
  {
    fecha: fechaAhora(),
    secreto: "Secreto 1",
  },
  {
    fecha: fechaAhora(),
    secreto: "Secreto 2",
  },
];

const Secretos = () => {
  const [secreto, setSecreto] = useState("");
  const [secretos, setSecretos] = useState(secretoss);

  const enviar = (e) => {
    e.preventDefault();
    secretoss.push({ fecha: fechaAhora(), secreto: secreto });
    setSecretos(secretoss);
    setSecreto("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSecreto(event.target.value);
  };

  return (
    <div className="col-de">
      <div className="card-secret-input input-secret">
        <span className="secret-box">Mi secreto es...</span>
        <form onSubmit={enviar} className="form-secreto">
          <input
            type="text"
            placeholder="Ej:que no me gusta la pizza con piña"
            value={secreto}
            onChange={handleSubmit}
          />
        </form>
      </div>
      {secretos.map((secreto, i) => (
        <Secreto key={i} fecha={secreto.fecha} secreto={secreto.secreto} />
      ))}
    </div>
  );
};

export default Secretos;
