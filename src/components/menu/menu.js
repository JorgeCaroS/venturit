import home from '../../media/Assets/IMG/menu/Home - Iconly---Bold.png';
import dots from '../../media/Assets/IMG/menu/dots.png';
import doc from '../../media/Assets/IMG/menu/doc.png';
import message from '../../media/Assets/IMG/menu/message.png';
import bar from '../../media/Assets/IMG/menu/bar.png';

export default function Menu() {
    return(
        <div className="menu-container">
            <div className="menu-item">
                 <span  id="menu-icon"  className="material-icons md-dark" > menu</span>
            </div>

            <div className="menu-item">
                <img id="menu-icon" src={home}/>
            </div>

            <div className="menu-item">
                <img id="menu-icon" src={dots}/>
            </div>

            <div className="menu-item">
                <img id="menu-icon" src={doc}/>
            </div>

            <div className="menu-item">
                <img id="menu-icon" src={bar}/>
            </div>

            <div className="menu-item">
                <img id="menu-icon" src={message}/>
            </div>
        </div>
    )}