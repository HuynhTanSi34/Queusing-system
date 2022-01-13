import "./profile.css";
import Logomini from "../../components/login/image/Logomini.png";
import filogout from "../../components/login/image/filogout.png";
import element4 from "../../components/login/image/element4.png";
import monitor from "../../components/login/image/monitor.png";
import service from "../../components/login/image/service.png";
import filayers from "../../components/login/image/filayers.png";
import map from "../../components/login/image/map.png";
import setting from "../../components/login/image/setting.png";
import bacham from "../../components/login/image/bacham.png";
import bell from "../../components/login/image/bell.png";
import belled from "../../components/login/image/belled.png";
import avatarmini from "../../components/login/image/avatarmini.png";
import avatarbig from "../../components/login/image/avatarbig.png";
import changepic from "../../components/login/image/changepic.png";
const Profile = () => {
  return (
    <section className="screen5">
      <section className="acti5">
        <img src={Logomini} alt="Logo" className="logo5" />
        <div className="list5">
          <div className="listItem5">
            <img src={element4} />
            <div>Dashboard</div>
          </div>
          <div className="listItem5">
            <img src={monitor} />
            <div>Thiết bị</div>
          </div>
          <div className="listItem5">
            <img src={service} />
            <div>Dịch vụ</div>
          </div>
          <div className="listItem5">
            <img src={filayers} />
            <div>Cấp số</div>
          </div>
          <div className="listItem5">
            <img src={map} />
            <div>Báo cáo</div>
          </div>
          <div className="listItem5 ml">
            <img src={setting} />
            <div>Cài đặt hệ thống</div>
            <img src={bacham} className="bacham5" />
            <div className="mucluc">
              <div className="muclucItem">Quản lí vai trò</div>
              <div className="muclucItem">Quản lí tài khoản</div>
              <div className="muclucItem">Nhật ký người dùng</div>
            </div>
          </div>
        </div>
        <div className="out5">
          <img src={filogout} alt="out" className="item5" />
          <div>Đăng xuất</div>
        </div>
      </section>
      <section className="content5">
        <div className="title55">Thông tin cá nhân</div>
        <div className="title52">
          <div>
            <img alt="thongbao" src={bell} className="bell5" />
          </div>
          <div>
            <img alt="avatar" src={avatarmini} className="avatarmini" />
          </div>
          <div>
            <div className="chao">Xin chào</div>
            <div className="ten">Lê Quỳnh Ái Vân</div>
          </div>
        </div>
        <div className="infor">
          <div className="photo">
            <img src={avatarbig} alt="..." />
            <img src={changepic} alt="..." className="change" />
          </div>
          <div className="name">Lê Quỳnh Ái Vân</div>
          <div className="listinfor">
            <div className="inforitem">
              Tên người dùng
              <input
                type="text"
                className="inp"
                placeholder="Lê Quỳnh Ái Vân"
              />
            </div>
            <div className="inforitem">
              Tên đăng nhập
              <input type="text" className="inp" placeholder="lequynhaivan01" />
            </div>
            <div className="inforitem">
              Số điện thoại
              <input type="text" className="inp" placeholder="0767375921" />
            </div>
            <div className="inforitem">
              Mật khẩu
              <input type="text" className="inp" placeholder="311940211" />
            </div>
            <div className="inforitem">
              Email:
              <input
                type="text"
                className="inp"
                placeholder="adminSSO1@domain.com"
              />
            </div>
            <div className="inforitem">
              Vai trò:
              <input type="text" className="inp" placeholder="Kế toán" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Profile;
