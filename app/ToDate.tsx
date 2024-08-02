"use client";
import React from "react";

const ToDate = () => {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <table
        style={{
          backgroundColor: "black",

          width: "100%",
          borderRadius: "15px",
        }}
      >
        <tr>
          <td style={{ width: "50%", padding: "25px" }}>
            <h3 style={{ color: "white" }}>
              <label htmlFor="mail">
                <b>
                  STAY UP-TO-DATE ABOUT<br></br> OUR LATEST OFFERS
                </b>
              </label>
            </h3>
          </td>
          <td style={{ width: "50%", padding: "25px", justifyItems: "end" }}>
            <input
              id="mail"
              placeholder="Enter your email address..."
              type="email"
              style={{ borderRadius: "15px", padding: "10px", width: "250px" }}
            ></input>
            <br></br>

            <button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "15px",
                padding: "10px 20px",
                marginTop: "8px",
                width: "250px",
              }}
            >
              Subscribe to Newsletter
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ToDate;
