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
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3.5">
            <div className="col-span-2">
              <h4>SHOP.CO</h4>
              <p className="text-xs">
                We have products that suit your style and personality that make
                you more of yourself.
              </p>
              <span>Social Media stuff</span>
            </div>
            <div>
              <h6 className="break-words">COMPANY</h6>
              <p className="text-xs">About</p>
              <p className="text-xs">Features</p>
              <p className="text-xs">Works</p>
              <p className="text-xs">Career</p>
            </div>
            <div>
              <h6>HELP</h6>
              <p className="text-xs">Customer Support</p>
              <p className="text-xs">Delivery Details</p>
              <p className="text-xs">Terms & Conditions</p>
              <p className="text-xs">Privacy Policy</p>
            </div>
            <div>
              <h6>FAQ</h6>
              <p className="text-xs">Account</p>
              <p className="text-xs">Manage Deliveries</p>
              <p className="text-xs">Orders</p>
              <p className="text-xs">Payments</p>
            </div>
            <div>
              <h6 className="break-words">RESOURCES</h6>
              <p className="text-xs break-words">Free eBooks</p>
              <p className="text-xs break-words">Development Tutorial</p>
              <p className="text-xs">How to-Blog</p>
              <p className="text-xs">Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
