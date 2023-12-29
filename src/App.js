import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import Scroll from './component/scrollButtonComponent/scroll';
import Foter from './component/footer/foter';
function App() {
const [screenMode,setScreenMode]=useState('#0D1A2D');

const handleScreenMode=(data)=>{
  console.log('data from navigation bar about screen mode',data)
  
  setScreenMode(data);
}
  const siteStyle={
    backgroundColor:screenMode
  }
  return (
    <div className="App"style={siteStyle}>
      
      <Navbar sendScreenModeToApp={handleScreenMode}/>
       {/* <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
           */}
      <Scroll/>  
      <Foter/> 


    </div>
  );
}

export default App;
