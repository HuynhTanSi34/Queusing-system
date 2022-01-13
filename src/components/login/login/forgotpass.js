import "./forgotpass.css";
import Frame from "../../components/login/image/Frame.png";
import Logoalta from "../../components/login/image/Logoalta.png";
const Forgot = () => {
  return (
    <div className="screen3">
      <div className="inform3">
        <div className="logo3">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className="us3">Đặt lại mật khẩu</div>
          <div className="pa3">
            Vui lòng nhập email để đặt lại mật khẩu của bạn*
          </div>
          <input className="reset3" type="text" />
          <div>
            <input type="submit" value="Tiếp tục" className="submit3" />
            <input className="cancel3" type="submit" value="Hủy" />
          </div>
        </form>
      </div>
      <div className="ima4">
        <div>
          <img src={Frame} className="ima41" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Forgot;
