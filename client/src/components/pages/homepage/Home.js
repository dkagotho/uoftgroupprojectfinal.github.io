import React from "react";
import "../../css/mainwindow.css";
import "../../css/style_home.css";


function Home () {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Welcome
          <small><i>"to.gather is an app to ....."</i></small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <i className="fas fa-door-open"></i> Main
          </li>
        </ol>
      </section>

      <div className="row">
        {/* <div className="col-sm-12 col-md-6 col-lg-6"> */}
        <div className="col-lg-6">
          <div className="home-href-img">
            <a href="/events">
              <div className="home-href-events"></div>
            </a>
          </div>
        </div>

        {/* <div className="col-sm-12 col-md-6 col-lg-6"> */}
        <div className="col-lg-6">
          <div className="home-href-img">
            <a href="/all-events">
              <div className="home-view-all"></div>
            </a>
          </div>
        </div>

        {/* <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <table className="home-table">
              <tr>
                <th>Event-Name</th>
                <th>Location</th>
                <th>Event-start</th>
              </tr>
              <tr>
                <td id="event-name"></td>
                <td id="event-location"></td>
                <td id="event-time"></td>
              </tr>
            </table>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <table className="home-table">
              <tr>
                <th>Event-Name</th>
                <th>Location</th>
                <th>Event-start</th>
              </tr>
              <tr>
                <td id="event-name"></td>
                <td id="event-location"></td>
                <td id="event-time"></td>
              </tr>
            </table>
          </div>
        </div> */}
      </div>

      <div class="homeT_wrapper">
        <div class="homeT_table">
          <div class="homeT_row homeT_header homeT_green">
            <div class="homeT_cell">
              Event Name
            </div>
            <div class="homeT_cell">
              Participants
            </div>
            <div class="homeT_cell">
              Event Date
            </div>
            <div class="homeT_cell">
              Location
            </div>
            <div class="homeT_cell">
              Status
            </div>
          </div>    
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 1
            </div>
            <div class="homeT_cell" data-title="Participants">
              10
            </div>
            <div class="homeT_cell" data-title="Event Date">
              09/15/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Created
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 2
            </div>
            <div class="homeT_cell" data-title="Participants">
              40
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/1/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Created
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 3
            </div>
            <div class="homeT_cell" data-title="Participants">
              5
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Created
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 4
            </div>
            <div class="homeT_cell" data-title="Participants">
              20
            </div>
            <div class="homeT_cell" data-title="Event Date">
              11/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Created
            </div>
          </div>
        </div>
  
        <div class="homeT_table">
          <div class="homeT_row homeT_header homeT_blue">
            <div class="homeT_cell">
              Event Name
            </div>
            <div class="homeT_cell">
              Participants
            </div>
            <div class="homeT_cell">
              Event Date
            </div>
            <div class="homeT_cell">
              Location
            </div>
            <div class="homeT_cell">
              Status
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 1
            </div>
            <div class="homeT_cell" data-title="Participants">
              10
            </div>
            <div class="homeT_cell" data-title="Event Date">
              09/15/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Joined
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 2
            </div>
            <div class="homeT_cell" data-title="Participants">
              40
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/1/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Joined
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 3
            </div>
            <div class="homeT_cell" data-title="Participants">
              5
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Joined
            </div>
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 4
            </div>
            <div class="homeT_cell" data-title="Participants">
              20
            </div>
            <div class="homeT_cell" data-title="Event Date">
              11/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              Toronto, CA
            </div>
            <div class="homeT_cell" data-title="Status">
              Joined
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default Home;

// function Home () {
//   return (
//     <div className="content-wrapper">
//       <section className="content-header">
//         <h1>
//           Welcome
//           <small><i>"to.gather is an app to ....."</i></small>
//         </h1>
//         <ol className="breadcrumb">
//           <li>
//             <i className="fas fa-door-open"></i> Main
//           </li>
//         </ol>
//       </section>

//       <section className="content">
//         <br />
//         SHOW SOME APP FEATURES!!
//         <br /><br /><br />
//         <a href="/events">
//           <span><i className="fas fa-share"></i> Events</span>
//         </a>
//       </section>
//     </div>
//   );
// }

// export default Home;