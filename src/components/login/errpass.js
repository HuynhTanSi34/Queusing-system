import "./errpass.css";
import Group341 from "../../components/login/image/Group341.png";
import Hethong from "../../components/login/image/Hethong.png";
import Quanli from "../../components/login/image/Quanli.png";
import Logoalta from "../../components/login/image/Logoalta.png";
import eye from "../../components/login/image/eye.png";
import failt from "../../components/login/image/failt.png";
const Errpass = () => {
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
              className="us"
              type="text"
              name="name"
              placeholder="lequynhavan01"
            />
          </div>
          <div className="pass">
            Mật khẩu*
            <input type="password" name="password" placeholder="****" />
          </div>
          <img src={eye} alt="Eye" className="eye" />
          <div className="failt">
            <img src={failt} />
          </div>
          <br />
          <div>
            <input type="submit" value="Đăng nhập" className="submit" />
            <div className="forgot">Quên mật khẩu?</div>
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
export default Errpass;
