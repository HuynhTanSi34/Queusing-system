import "./newpass.css";
import Frame from "../../components/login/image/Frame.png";
import Logoalta from "../../components/login/image/Logoalta.png";
import eye from "../../components/login/image/eye.png";
const Newpass = () => {
  return (
    <div className="screen4">
      <div className="inform4">
        <div className="logo4">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="title4">Đặt lại mật khẩu mới</div>
          <div className="newpa4">
            Mật khẩu
            <input type="password" name="password" className="pass55" />
            <img src={eye} alt="..." className="eye4" />
          </div>
          <div className="newpa42">
            Nhập lại mật khẩu
            <input type="password" nam="password" className="pass555" />
            <img src={eye} alt="..." className="eye4" />
          </div>
          <div>
            <input type="submit" value="Xác nhận" className="submit4" />
          </div>
        </form>
      </div>
      <div className="ima55">
        <div>
          <img src={Frame} className="ima51" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Newpass;
