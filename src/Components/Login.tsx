import UserLoginIcon from "../assets/UserLoginIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
import PasswordIcon from "../assets/PasswordIcon.png";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={UserLoginIcon} alt="" />
          <input type="text" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={EmailIcon} alt="" />
          <input type="email" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={PasswordIcon} alt="" />
          <input type="password" />
        </div>
      </div>
      <div className="forgotPassword">
        <span>Click Here!</span>
      </div>

      <div className="submitContainer">
        <div className="submit">Register Here</div>
        <div className="submit">Login</div>
      </div>

      <div className="forgotPassword">
        {" "}
        Lost Password?
        <span>Click Here!</span>
      </div>
    </div>
  );
};

export default Login;
