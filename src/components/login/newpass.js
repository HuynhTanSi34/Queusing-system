import "./newpass.css";
import Frame from "../../components/login/image/Frame.png";
import Logoalta from "../../components/login/image/Logoalta.png";
import eye from "../../components/login/image/eye.png";
const Newpass = () => {
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="title">Đặt lại mật khẩu mới</div>
          <div className="newpa">
            Mật khẩu
            <input type="passwword" name="password" />
            <img src={eye} alt="..." className="eye" />
          </div>
          <div className="newpa2">
            Nhập lại mật khẩu
            <input type="password" nam="password" />
            <img src={eye} alt="..." className="eye" />
          </div>
          <div>
            <input type="submit" value="Xác nhận" className="submit" />
          </div>
        </form>
      </div>
      <div className="ima">
        <div>
          <img src={Frame} className="ima1" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Newpass;
