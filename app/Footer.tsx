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
          paddingTop: "25px",
        }}
        className="m-4"
      >
        <div style={{ padding: "25px" }}>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-2">
              <h4>SHOP.CO</h4>
              <p>
                We have products that suit your style and personality that make
                you more of yourself.
              </p>
              <span>Social Media stuff</span>
            </div>
            <div>
              <h6 style={{ width: "15%" }} className="break-word">
                COMPANY
              </h6>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div>
              <h6>HELP</h6>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <h6>FAQ</h6>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div>
              <h6>RESOURCES</h6>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to-Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
