import "../style.css";
import Group341 from "../../components/image/Group341.png";
import Hethong from "../../components/image/Hethong.png";
import Quanli from "../../components/image/Quanli.png";
import Logoalta from "../../components/image/Logoalta.png";
import eye from "../../components/image/eye.png";
const Login = () => {
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="user">
            Tên đăng nhập*
            <input
              type="text"
              name="name"
              placeholder="lequynhavan01"
              className="use"
            />
          </div>
          <div className="pass">
            Mật khẩu*
            <input
              type="password"
              name="password"
              placeholder="****"
              className="pas"
            />
          </div>
          <img src={eye} alt="Eye" className="eye" />
          <div className="forgot">Quên mật khẩu?</div>
          <br />
          <div>
            <input type="submit" value="Đăng nhập" className="submit1" />
          </div>
        </form>
      </div>
      <div className="image">
        <div>
          <img src={Group341} className="image1" alt="Lỗi" />
          <img src={Hethong} className="image2" alt="Lỗi" />
          <img src={Quanli} className="image3" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Login;
