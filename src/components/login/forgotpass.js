import "./forgotpass.css";
import Frame from "../../components/login/image/Frame.png";
import Logoalta from "../../components/login/image/Logoalta.png";
const Forgot = () => {
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="us">Đặt lại mật khẩu</div>
          <div className="pa">
            Vui lòng nhập email để đặt lại mật khẩu của bạn*
          </div>
          <input className="reset" type="text" />
          <div>
            <input type="submit" value="Tiếp tục" className="submit" />
            <input className="cancel" type="submit" value="Hủy" />
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
export default Forgot;
