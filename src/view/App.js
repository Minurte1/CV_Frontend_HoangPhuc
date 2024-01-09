
import '../view/App.css'

import TextTyping from '../component/TextTyping/TextTyping';
// import AnimationBackgroundText from '../component/Animation-BackgroundText/Animation-BackgroundText';
function App() {

  return (
    <>

      <div className="App">

        <div className='App-background'>
          <div className='App-background_Imfomation'>
            <h1 className='Imfomation-Name'>Hoàng Phúc</h1>
            <h3 className='Imfomation-Name1'>Sinh viên năm 3 chuyên ngành công nghệ thông tin</h3>
            <div className='border'></div>
            <div id='Component-Text'>
              <TextTyping className="Component-Text"></TextTyping>
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
        </div>
      </div>
    </>
  );
}

export default App;
