const fechaAhora = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toLocaleDateString();;
};

export default fechaAhora;