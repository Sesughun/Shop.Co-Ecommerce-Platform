"use client";

const Filters = () => {
  return (
    <div className="card ml-3">
      <div className="card-body">
        <div>
          <h3>Filters</h3>
        </div>
        <div>
          <h5>Categories</h5>
          <div className="btn btn-secondary mb-2 mr-1">All</div>
          <div className="btn btn-secondary mb-2 mr-1">Men</div>
          <div className="btn btn-secondary mb-2 mr-1">Women</div>
          <div className="btn btn-secondary mb-2 mr-1">Bags</div>
          <div className="btn btn-secondary mb-2 mr-1">Jewelery</div>
          <div className="btn btn-secondary mb-2 mr-1">Electronics</div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
