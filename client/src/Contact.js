import React from "react";

function ContactUs() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Contact Us</h3>

            <div className="col-sm-6">
              <div className="well">
                <h4 className="divider">
                  <i className="bx bxs-user-voice"></i> Problem Area
                </h4>
                <p>
                  Vehicle registration, fitness, Tax, Permit, Fancy, Dealer etc
                </p>
                <p>Learner License, Driving Licence etc</p>
                <p>mParivahan Related</p>
                <p>eChallan Related</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="well">
                <h4 className="divider">
                  <i className="bx bxl-gmail"></i> Email-id
                </h4>
                <p>helpdesk-vahan[at]gov[dot]in</p>
                <p>helpdesk-sarathi[at]gov[dot]in</p>
                <p>helpdesk-mparivahan[at]gov[dot]in </p>
                <p>helpdesk-echallan[at]gov[dot]in</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="well">
                <h4 className="divider">
                  {" "}
                  <i className="bx bxs-contact"></i> Contact Number
                </h4>
                <p style={{ padding: "43px" }}>+91-120-4925505</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="well">
                <h4 className="divider">
                  <i className="bx bxs-time"></i> Timings
                </h4>
                <p style={{ padding: "43px" }}>06:00 AM - 12:00 Midnight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
