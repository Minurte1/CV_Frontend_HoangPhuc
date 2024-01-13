
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
              <h1>KIẾN THỨC ĐÃ HỌC</h1>
              <img className='img-react' style={{ animation: `spin ${speed}s linear infinite` }} src={require('../public/image/logo512.png')}></img>

              <img className='img-nodejs' src={require('../public/image/icons8-nodejs-480.png')}></img>
              <div>
                <span className='span-logo'>Reactjs</span>
                <span className='span-nodejs'>Nodejs</span>
              </div>

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
            <a href='/'> <h2>KIẾN THỨC ĐÃ HỌC</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='/'> <h2>DỰ ÁN ĐÃ LÀM</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='/'> <h2>KINH NGHIỆM HỌC TẬP</h2></a>
          </div>
          <div className='App-backgroundRight_Thongtinlienhe'>
            <a href='/'> <h2>CÔNG NGHỆ ĐÃ TIẾP CẬN</h2></a>
          </div>

        </div>
      </div>
    </>
  );

}
export default App;
