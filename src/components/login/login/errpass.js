import "./errpass.css";
import Group341 from "../../components/login/image/Group341.png";
import Hethong from "../../components/login/image/Hethong.png";
import Quanli from "../../components/login/image/Quanli.png";
import Logoalta from "../../components/login/image/Logoalta.png";
import eye from "../../components/login/image/eye.png";
import failt from "../../components/login/image/failt.png";
const Errpass = () => {
  return (
    <div className="screen2">
      <div className="inform2">
        <div className="logo2">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="user2">
            Tên đăng nhập*
            <input
              className="use2"
              type="text"
              name="name"
              placeholder="lequynhavan01"
            />
          </div>
          <div className="pass2">
            Mật khẩu*
            <input
              type="password"
              name="password"
              placeholder="****"
              className="pass22"
            />
          </div>
          <img src={eye} alt="Eye" className="eye2" />
          <div className="failt2">
            <img src={failt} />
          </div>
          <br />
          <div>
            <input type="submit" value="Đăng nhập" className="submit2" />
            <div className="forgot2">Quên mật khẩu?</div>
          </div>
        </form>
      </div>
      <div className="ima0">
        <div>
          <img src={Group341} className="imaa1" alt="Lỗi" />
          <img src={Hethong} className="imaa2" alt="Lỗi" />
          <img src={Quanli} className="imaa3" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Errpass;
