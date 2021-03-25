import "./header.css";

const Header = () => {
  const changeCheck = () => {
    const check = document.getElementById("checkbox");

    console.log(check.checked);

    if (check.checked === true) {
      document.body.classList.toggle("dark-theme");
    }else{
     document.body.classList.remove("dark-theme")
    }
  };
  return (
    <div className='menu'>
      <div className='color'>
        <label className='switch'>
          <input type='checkbox' id='checkbox' onClick={() => changeCheck()} />
          <span className='slider round'></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
