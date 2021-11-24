import banner from '../../media/Assets/IMG/3000434.png';
import thumbnail1 from '../../media/Assets/IMG/thumbnail.png';

export default function Events() {

    return(
          <div className="events-container">
              <h1>Events</h1> 
                <div className="events-content">
                <div className="events-banner-container">
                    <div className="events-banner-arrow-left">{"<-"}</div>
                  <h3 className="events-banner-title">Youth Talent & Education</h3>  
                  <h3 className="events-banner-date">May,20</h3> 
                  <div className="events-banner-arrow-right">{"->"}</div>
                 <img className="events-banner" src={banner}/>
                </div>
                <div className="events-right-section">
                     <div className="events-right-section-title">
                        <h3>EVENTS TODAY</h3>
                        <div className="events-line"></div>
                    </div>
                    <div className="events-right-section-item">
                        <img id="menu-icon" src={thumbnail1}/>
                        <div className="events-right-section-desc">
                            <label className="events-item-hour">10:30 AM</label>
                            <label className="events-item-desc">Webinar: the basics of...</label>
                        </div>
                    </div>

                    <div className="events-right-section-item">
                        <img id="menu-icon" src={thumbnail1}/>
                        <div className="events-right-section-desc">
                            <label className="events-item-hour">2:15 PM</label>
                            <label className="events-item-desc">Team Building Activity</label>
                        </div>
                    </div>

                </div>
              </div>
          </div>
          )

}