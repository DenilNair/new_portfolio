
import './App.css';
import Navbar from './component/navbar/navbar';
import Scroll from './component/scrollButtonComponent/scroll';
function App() {

  
  return (
    <div className="App">
      
      <Navbar/>
       {/* <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
           */}
      <Scroll/>
    </div>
  );
}

export default App;
