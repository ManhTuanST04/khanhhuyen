import logo from './logo.svg';
import hoangteo from './photo/hoangteo.jpg';
import './App.css';
import Player from './component/Player';
import mp3Sound from './sound/chayvenoiphiaanh.mp3';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <div className='app-main'>
        <div className='wrap-body'>
          <div className='avatar'>
            <img src={hoangteo} />
          </div>
          <div className='content'>
            Vé máy bay Khánh Huyền<br></br>
            ✈️Hành trình bay Nhật Bản về Việt Nam<br></br>
            Narita - Hà Nội<br></br>
            Bay Bambo - Hành lý 40kg+ 7 xách tay<br></br>
            ✅THÁNG 3: Các ngày 18, 22, 25 => Giá 7xtr<br></br>
            ✅THÁNG 4: Các ngày 5, 8, 12, 15, 19, 22, 29, 26 => Giá 8xtr<br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
