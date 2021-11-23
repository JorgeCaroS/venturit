import logo from '../../../src/media/Assets/IMG/Group.png';
import '../../../src/global.css';
import MainHeader from '../mainheader/mainheader';
import DashBoard from '../dashboard/dashboard';
import Menu from '../menu/menu';
import Events from '../events/events';

function App() {
  return (
    <div className="app-container">


      
       <MainHeader/>

      

      <div className="app-content">
        <Menu/>
        <div className="app-content-column">
          <DashBoard/>
          <Events/>
        </div>
      </div>
                
      
    </div>
  );
}

export default App;
