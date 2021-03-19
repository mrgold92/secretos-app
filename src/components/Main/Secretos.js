import "./secreto.css";
import Secreto from "../Secreto/Secreto";
import { useState, useEffect } from "react";
import fechaAhora from "../../utils/Fecha";
import firebase from "../../firebase.js";

const Secretos = () => {
  const [secreto, setSecreto] = useState("");
  const [secretos, setSecretos] = useState([]);

  useEffect(() => {
    return firebase.collection("secretos").onSnapshot((secreto) => {
      const secretoss = [];

      secreto.forEach((doc) =>
        secretoss.push({ fecha: fechaAhora(), secreto: doc.data().secreto })
      );
      console.log(secretoss);
      setSecretos(secretoss);
    });
  }, []);
  

  const enviar = (e) => {
    e.preventDefault();
    // secretoss.push({ fecha: fechaAhora(), secreto: secreto });
    // setSecretos(secretoss);
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
