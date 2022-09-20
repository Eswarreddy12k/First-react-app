import './App.css';
import Imglist from './Imglist';

function App() {
  return (
    <>
    <div>
      <div className="header">
        <h1>My Gallery</h1>
    </div>
      <Imglist date="Sat, 10 September"/>
      <Imglist date="Wed, 7 September"/>
      <Imglist date="Tue, 6 September"/>
      <Imglist date="Thu, 25 August"/>
      <Imglist date="Wed, 17 August"/>
      <Imglist date="Sun, 3 July"/>
      <Imglist date="Sun, 17 July"/>
      <Imglist date="Wed, 13 July"/>
      <Imglist date="Fri, 24 June"/>
      <Imglist date="Sat, 18 June"/>
      <Imglist date="Tue, 10 May"/>
      
    </div>
    <div className="footer">
        <h1>End of Gallery</h1>
    </div>
    </>
  );
}

export default App;
