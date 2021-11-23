import logo from '../../media/Assets/IMG/Headers/header-4.png';
import animation from '../../media/Assets/IMG/Group 9.png';
import flag from '../../media/Assets/IMG/Screen Shot 2020-09-24 at 3.34.23 PM.png';




export default function DashBoard() {
    return(
        <div className="dashboard-container">    
            <div className="dashboard-header-container">                
                  <h1>Dashboard</h1> 
                  <div className="dashboard-header-right">
                    <label>Currently Learning</label>
                    <div className="dashboard-header-right-flag-container">                  
                        <img className="dashboard-header-flag" src={flag}  />
                        <h1>English</h1>
                    </div>  
                  </div>
              </div>

            <div className="dashboard-banner-container">
                <div className="dashboard-banner-text">
                    <h2>Welcome back, Clarence</h2>
                    <span>Ta-da! You´re up to date.🥳</span>
                </div>
             <img className="dashboard-animation-image"src={animation}  />
             <img className="dashboard-background-image"src={logo} />
            </div>
            
             
        </div>
    )
}