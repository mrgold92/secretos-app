import "./header.css";

const Header = () => {
  return (
    <div className="menu">
      <div className="color">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
