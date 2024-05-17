// import "./Hero.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="">
        <img
          className="first-fold-child"
          loading="lazy"
          alt=""
          src="/group-38@2x.png"
        />
          {/* <img
            className="setting-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          /> */}
          <b className="product">Product</b>
          <b className="shop-order">Shop Order</b>
          <b className="order">Order</b>
          <b className="setting1">Setting</b>
          <div className="avatar">
            <img
              className="aspect-ratio-keeper-addition"
              loading="lazy"
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
            />
          </div>
          <img
            className="logout-icon"
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
        <h1 className="welcome-to-fev-container">
          <span className="welcome-to-fev-container1">
            <p className="welcome-to">{`Welcome to `}</p>
            <p className="fev-shop">FEV - SHOP</p>
          </span>
        </h1>
        <h3 className="time-to-enjoy">Time to enjoy our delicious food.</h3>
        <button className="button">
          <div className="order-now">ORDER NOW</div>
        </button>
      </div>
      <img
        className="margherita-pizza-3-icon"
        loading="lazy"
        alt=""
        src="/margheritapizza-3@2x.png"
      />
      <div className="image" />
    </div>
  );
};

export default Homepage;
