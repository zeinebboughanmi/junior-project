import React from "react";

const List = ({ products, handelDelete, changeView, getId }) => {
  return (
    <div className="container " >
      <h1>Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.imageUrl || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary ms-2"
                  onClick={() => {
                    getId(product.id);
                    changeView("update");
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;