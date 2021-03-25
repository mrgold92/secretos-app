import "./secreto.css";
import Secreto from "../Secreto/Secreto";
import { useState, useEffect } from "react";
import fechaAhora from "../../utils/Fecha";
import firebase from "../../firebase.js";
import FlashMessage from "../../utils/flashMessage";
import timeOut from "../../utils/timeOut";

const Secretos = () => {
  const [secreto, setSecreto] = useState("");
  const [secretos, setSecretos] = useState([]);
  const [flashMessages, setFlashMessages] = useState({});
  const [mostrarMensaje, setMostrarMessage] = useState(false);
  const [actualizar, setActualizar] = useState(false);

  const mostrarAll = () => {
    const secretoss = [];

    firebase
      .collection("secretos")
      .orderBy("createdAt", "desc")
      .limit(10)
      .get()
      .then((secreto) => {
        secreto.forEach((doc) =>
          secretoss.push({ fecha: fechaAhora(), secreto: doc.data().secreto })
        );
      })
      .then(() => {
        setSecretos(secretoss);
      });

    setActualizar(false);
  };

  useEffect(() => {
    mostrarAll();
  }, [actualizar]);

  const actualizarComp = () => {
    setActualizar(true);
    mostrarAll();
  };

  useEffect(() => {
    timeOut(4000, setMostrarMessage);
  }, [mostrarMensaje]);

  const enviar = (e) => {
    e.preventDefault();

    if (secreto === "") {
      setFlashMessages({
        mensaje: "Error, añade un texto",
        success: "error",
      });
      setMostrarMessage(true);
      actualizarComp();
    } else {
      const newSecret = {
        secreto: secreto,
        fecha: fechaAhora(),
        createdAt: new Date(),
      };

      firebase
        .collection("secretos")
        .add(newSecret)
        .then(() => {
          setFlashMessages({
            mensaje: "Saved",
            success: "success",
          });
          setMostrarMessage(true);
        })

        .catch(() => {
          setFlashMessages({
            mensaje: "Error",
            success: "error",
          });
          setMostrarMessage(true);
        });
      setSecreto("");
      actualizarComp();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSecreto(event.target.value);
  };

  return (
    <div className='col-de'>
      <div className='card-secret-input input-secret'>
        <span className='secret-box'>Mi secreto es...</span>
        <form onSubmit={enviar} className='form-secreto'>
          <input
            type='text'
            placeholder='Ej:que no me gusta la pizza con piña'
            value={secreto}
            onChange={handleSubmit}
          />
        </form>
      </div>
      {secretos.map((secreto, i) => (
        <Secreto key={i} fecha={secreto.fecha} secreto={secreto.secreto} />
      ))}

      {mostrarMensaje && (
        <FlashMessage
          mensaje={flashMessages.mensaje}
          success={flashMessages.success}
        />
      )}
    </div>
  );
};

export default Secretos;
