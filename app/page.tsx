import "bootstrap/dist/css/bootstrap.css";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import ShopNow from "./ShopNow";

export default function Home() {
  return (
    <div className="body">
      <table>
        <tbody>
          <tr className="bg-[#F2F0F1] pl-[50px] pt-[50px] w-2">
            <td style={{ width: "50%", padding: "50px" }}>
              <div>
                <h1 style={{ fontWeight: "bold" }}>
                  FIND PRODUCTS <br />
                  THAT MATCH <br />
                  YOUR TASTE
                </h1>
                <p style={{ width: "50%" }}>
                  Browse through our diverse range of meticulously picked
                  products designed to bring out your personality and cater to
                  your daily needs
                </p>
                <ShopNow />
                <div className="flex">
                  <div>
                    <h4>200+</h4>
                    <p className="brand">International Brands</p>
                  </div>
                  <div className="vl"></div>
                  <div>
                    <h4>2,000+</h4>
                    <p className="brand">High-Quality Products</p>
                  </div>
                  <div className="vl"></div>
                  <div>
                    <h4>30,000+</h4>
                    <p className="brand">Happy Customers</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <NewArrivals />
      <hr
        style={{
          marginTop: "50px",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      />

      <TopSelling />

      <hr
        style={{ marginTop: "50px", marginLeft: "100px", marginRight: "100px" }}
      />
    </div>
  );
}
