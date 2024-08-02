import React from "react";
import ToDate from "./ToDate";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <ToDate />
      <div
        style={{
          backgroundColor: "#d3d3d3",
          borderRadius: "15px",
          paddingTop: "55px",
        }}
      >
        <div style={{ padding: "25px" }}>
          <table>
            <tr style={{ width: "80%" }}>
              <td style={{ width: "35%" }}>
                <h4>SHOP.CO</h4>
                <p>
                  We have products that suit your <br></br>style and personality
                  that <br></br>make you more of yourself.
                </p>
                Social Media stuff
              </td>
              <td>
                <h6 style={{ width: "15%" }}>COMPANY</h6>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </td>
              <td style={{ width: "15%" }}>
                <h6>HELP</h6>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </td>
              <td style={{ width: "15%" }}>
                <h6>FAQ</h6>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </td>
              <td style={{ width: "15%" }}>
                <h6>RESOURCES</h6>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to-Blog</p>
                <p>Youtube Playlist</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Footer;
