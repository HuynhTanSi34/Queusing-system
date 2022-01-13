import "../../components/dashboard/day.css";
import Logomini from "../../components/image/Logomini.png";
import filogout from "../../components/image/filogout.png";
import element4 from "../../components/image/element4.png";
import monitor from "../../components/image/monitor.png";
import service from "../../components/image/service.png";
import filayers from "../../components/image/filayers.png";
import map from "../../components/image/map.png";
import setting from "../../components/image/setting.png";
import bacham from "../../components/image/bacham.png";
import bell from "../../components/image/bell.png";
import avatarmini from "../../components/image/avatarmini.png";
const Day = () => {
  return (
    <section className="screen">
      <section className="acti">
        <img src={Logomini} alt="Logo" className="logo" />
        <div className="list">
          <div className=" das">
            <img src={element4} />
            <div>Dashboard</div>
          </div>
          <div className="listItem">
            <img src={monitor} />
            <div>Thiết bị</div>
          </div>
          <div className="listItem">
            <img src={service} />
            <div>Dịch vụ</div>
          </div>
          <div className="listItem">
            <img src={filayers} />
            <div>Cấp số</div>
          </div>
          <div className="listItem">
            <img src={map} />
            <div>Báo cáo</div>
          </div>
          <div className="listItem ml">
            <img src={setting} />
            <div>Cài đặt hệ thống</div>
            <img src={bacham} className="bacham" />
            <div className="mucluc">
              <div className="muclucItem">Quản lí vai trò</div>
              <div className="muclucItem">Quản lí tài khoản</div>
              <div className="muclucItem">Nhật ký người dùng</div>
            </div>
          </div>
        </div>
        <div className="out">
          <img src={filogout} alt="out" className="item" />
          <div>Đăng xuất</div>
        </div>
      </section>
      <section className="overoll">
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
      </section>
    </section>
  );
};
export default Day;
