import "./login.css";
import Group341 from "../../components/login/image/Group341.png";
import Hethong from "../../components/login/image/Hethong.png";
import Quanli from "../../components/login/image/Quanli.png";
import Logoalta from "../../components/login/image/Logoalta.png";
import eye from "../../components/login/image/eye.png";
const Login = () => {
  return (
    <div className="screen1">
      <div className="inform1">
        <div className="logo1">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="user1">
            Tên đăng nhập*
            <input
              type="text"
              name="name"
              placeholder="lequynhavan01"
              className="use1"
            />
          </div>
          <div className="pass1">
            Mật khẩu*
            <input
              type="password"
              name="password"
              placeholder="****"
              className="pass11"
            />
          </div>
          <img src={eye} alt="Eye" className="eye1" />
          <div className="forgot1">Quên mật khẩu?</div>
          <br />
          <div>
            <input type="submit" value="Đăng nhập" className="submit1" />
          </div>
        </form>
      </div>
      <div className="ima">
        <div>
          <img src={Group341} className="ima1" alt="Lỗi" />
          <img src={Hethong} className="ima2" alt="Lỗi" />
          <img src={Quanli} className="ima3" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Login;
