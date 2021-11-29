import logo from '../../media/Assets/IMG/Group.png';
import notification from '../../media/Assets/IMG/Notification - Iconly---Bold.png';
import message from '../../media/Assets/IMG/Chat - Iconly---Bold.png';
import avatar from '../../media/Assets/IMG/Placeholders/Profile/Picture.png';
import arrow from '../../media/Assets/IMG/Arrow---Down-2 - Iconly---Bold.png';




export default function MainHeader() {
    return(
        <div className="mainheader-container">
          <div className="mainheader-container-desktop">     
       
             <img className="header-logo"src={logo} className="App-logo" alt="logo" />

             <div  className="header-input-container">
                <input  className="header-input" placeholder="Search and Find" />
                <span  id="search-icon"  className="material-icons md-dark" > search</span>
             </div>

            <button className="header-button">+ADD</button>
             <div className="header-notificaion-container">
                 <div className="header-notificacion-dot"></div>
                 <img className="header-notification"src={notification}  />
            </div>
            <img className="header-message"src={message}  />
            <label className="header-name"> Clarence Russell </label>
            <img className="header-avatar"src={avatar}  />
            <img className="header-arrow"src={arrow}  />            
             
        </div>

            <div className="mainheader-container-mobile">     
            <span  id="menu-icon-mobile"  className="material-icons md-dark" > menu</span>
                
            <img className="header-logo"src={logo} className="App-logo" alt="logo" />
           
            <img className="header-avatar-mobile"src={avatar}  />
                     

            </div>

            </div>

        
    )
}