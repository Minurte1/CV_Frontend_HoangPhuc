
import '../view/App.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import TextTyping from '../component/TextTyping/TextTyping';
// import AnimationBackgroundText from '../component/Animation-BackgroundText/Animation-BackgroundText';

function App() {

  const [speed, setSpeed] = useState(3);
  useEffect(() => {
    const intervalId = setInterval(() => {

    }, speed); return () => clearInterval(intervalId);
  }, [speed]);

  window.onload = function () {

    const text = document.querySelector(".sec-text");
    if (text) {
      const load = () => {
        setTimeout(() => {
          text.textContent = "Web Developer";

        }, 0)
        setTimeout(() => {
          text.textContent = "Web Frontend";

        }, 5900)
        setTimeout(() => {
          text.textContent = "Web Backend";

        }, 11900)
      }
      load();
      setInterval(load, 12000)
    } else {
      console.error("Element with class 'sec-text' not found");
    }

  }

  return (
    <>

      <div className="App">

        <div className='App-background'>
          <div className='App-background_Imfomation'>
            <h1 className='Imfomation-Name'>Hoàng Phúc</h1>
            <h3 className='Imfomation-Name1'>Sinh viên năm 3 chuyên ngành công nghệ thông tin</h3>

            <div id='Component-Text'>
              <TextTyping className="Component-Text"></TextTyping>
            </div>
            <div className='border'></div>
            <div className='Thongtincanhan'>
              <h1 id='Thongtin'>THÔNG TIN CÁ NHÂN</h1>
              <p><i class="fa-solid fa-phone tb"></i> 0327434821</p>
              <p><i class="fa-solid fa-envelope tb"></i> hohoangphucjob@gmail.com</p>
              <p><i class="fa-brands fa-github tb"></i> https://github.com/Minurte1</p>

            </div>

            <div className='Kienthucdahoc'>
              <h1 id='Kienthuc'>KIẾN THỨC ĐÃ HỌC</h1>
              <img className='img-react' style={{ animation: `spin ${speed}s linear infinite` }} src={require('../public/image/logo512.png')}></img>

              <img className='img-nodejs' src={require('../public/image/icons8-nodejs-480.png')}></img>
              <img className='img-nodejs' src={require('../public/image/icons8-javascript-480.png')}></img>
              <img className='img-nodejs' src={require('../public/image/icons8-css-480.png')}></img>
              <img className='img-nodejs' src={require('../public/image/mysql.png')}></img>
              <img className='img-nodejs' src={require('../public/image/c-sharp.png')}></img>
              <div>
                <span className='span-logo'>Reactjs</span>
                <span className='span-nodejs'>Nodejs</span>
                <span className='span-javascript'>Javascript</span>
                <span className='span-nodejs'>CSS</span>
                <span className='span-nodejs' >MySQL</span>
                <span className='span-c' >C#</span>
              </div>

            </div>
            <div className='Duandalam'>
              <h1 id='Duan'>DỰ ÁN ĐÃ LÀM</h1>
              <h3>Xây dựng website thương mại điện tử bán giày</h3>
              <p><strong>Github: </strong>https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript</p>
              <p><strong>Thông tin dự án: </strong>Dự án cá nhân - Từ ngày 11/11/2023 đến ngày 10/1/2024</p>

              <li>Trong quá trình thực hiện project sử dụng các công nghệ để xây dựng website như: React, Nodejs, MySql, Docker</li>
              <li>Trong quá trình thực hiện project có sử dụng thêm một số công cụ hỗ trợ như: Github, Nodemon, Bootstrap,...</li>

              <p className='p-chucnang'><strong>Chức năng: </strong>
                <ul className='frontend'>- Frontend
                  <li>Chức năng thanh toán cho khách hàng</li>
                  <li>Lấy thông tin của khách hàng</li>
                  <li>Tìm kiếm sản phẩm</li>
                  <li>Lọc sản phẩm</li></ul>
                <ul className='frontend'>- Backend
                  <li>Thêm sửa xóa hiển thị sản phẩm</li>
                  <li>Thêm sửa xóa các hãng</li>
                  <li>Thống kê đơn hàng</li>
                  <li>Thống kê sản phẩm trong kho</li></ul>


              </p>

              <h3>Xây dựng website thương mại điện tử bán giày</h3>
              <p><strong>Github: </strong>https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript</p>
              <p><strong>Thông tin dự án: </strong>Dự án cá nhân - Từ ngày 11/11/2023 đến ngày 10/1/2024</p>

              <li>Trong quá trình thực hiện project sử dụng các công nghệ để xây dựng website như: React, Nodejs, MySql, Docker</li>
              <li>Trong quá trình thực hiện project có sử dụng thêm một số công cụ hỗ trợ như: Github, Nodemon, Bootstrap,...</li>

              <p className='p-chucnang'><strong>Chức năng: </strong>
                <ul className='frontend'>- Frontend
                  <li>Chức năng thanh toán cho khách hàng</li>
                  <li>Lấy thông tin của khách hàng</li>
                  <li>Tìm kiếm sản phẩm</li>
                  <li>Lọc sản phẩm</li></ul>
                <ul className='frontend'>- Backend
                  <li>Thêm sửa xóa hiển thị sản phẩm</li>
                  <li>Thêm sửa xóa các hãng</li>
                  <li>Thống kê đơn hàng</li>
                  <li>Thống kê sản phẩm trong kho</li></ul>


              </p>
            </div>
            <div className='Kinhnghiemhoctap'>
              <h1 id='Hocvan'>HỌC VẤN</h1>
              <h4>Hiện đang là sinh viên năm 3 - chuyên ngành Công Nghệ Thông Tin - Đại Học Trà Vinh</h4>
              <li>Tháng 8/2021 - hiện nay</li>

              <li>Đề tài cơ sở ngành: Xây dựng webiste thương mại điện tử bán giày - Nghiên cứu và phát triển một giải pháp hiệu quả cho vấn đề <br></br> cụ thể trong lĩnh vực Công nghệ Thông tin.</li>

            </div>
            <div className='Kinhnghiemhoctap'>

              <p><strong>I'm a</strong> <p className='sec-text'></p></p>

            </div>

          </div>

        </div>
        <div className='App-backgroundRight'>
          <div className='App-backgroundRight-1'>
            <div className='App-backgroundRight-1-1'></div>
            <div className='App-backgroundRight-1-2'>
              <img className='Avatar' src={require('../public/image/320564998_1534201846993456_7510390030141632899_n.png')}></img>

            </div>
          </div>

          <div className='App-backgroundRight-3'></div>
          <div className='App-backgroundRight-4'></div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='#Thongtin'> <h2>THÔNG TIN CÁ NHÂN</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='#Kienthuc'> <h2>KIẾN THỨC ĐÃ HỌC</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='#Duan'> <h2>DỰ ÁN ĐÃ LÀM</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='#Hocvan'> <h2>HỌC VẤN</h2></a>
          </div>
          {/* <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='/'> <h2>CÔNG NGHỆ ĐÃ TIẾP CẬN</h2></a>
          </div> */}

        </div>
      </div>
    </>
  );

}
export default App;
