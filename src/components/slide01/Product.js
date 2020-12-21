import React from "react";
import "../../stylesheets/App.scss";
import "../../stylesheets/Product.scss";
const Product = (props) => {
  const eachProduct = props.infoProducts.map((a, i) => {
    return (
      <section aria-label="content-info" key={a.id} id={i} className="slide">
        <div className="container">
          <article
            aria-label="slide__product-description"
            className="container__products"
          >
            <li className="container__data">
              <div className="container__data--text">
                <small>{a.author}</small>
                <h4>{a.name}</h4>
                <p className="paragraph">{a.description}</p>
              </div>
              <div>
                <img
                  src={a.img}
                  alt="imagen de producto"
                  className="container__data--img"
                />
              </div>
            </li>
          </article>
        </div>
      </section>
    );
  });
  return <ul>{eachProduct}</ul>;
};
export default Product;