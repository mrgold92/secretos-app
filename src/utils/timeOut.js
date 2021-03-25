function timeOut(time, setMostrarMessage) {
  setTimeout(() => {
    setMostrarMessage(false);
  }, time);
}

export default timeOut;
