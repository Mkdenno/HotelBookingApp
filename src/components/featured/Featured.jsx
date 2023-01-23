import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
      <img 
      className="featuredImg"
        src="https://images.pexels.com/photos/11408417/pexels-photo-11408417.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
      />
      <div className="featuredTitles">
        <h1>Eka Hotel Nairobi</h1>
        <h2>11</h2>
      </div>
      </div>

      <div className="featuredItem">
      <img
            className="featuredImg"
      src="https://images.pexels.com/photos/11408417/pexels-photo-11408417.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
      />
      <div className="featuredTitles">
        <h1>Eka Hotel Kenya</h1>
        <h2>22</h2>
      </div>
      </div>

      <div className="featuredItem">
      <img
            className="featuredImg"
      src="https://images.pexels.com/photos/11408417/pexels-photo-11408417.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
      />
      <div className="featuredTitles">
        <h1>Dai Heka Guest CapeTown</h1>
        <h2>123</h2>
      </div>
      </div>

      <div className="featuredItem">
      <img
            className="featuredImg"
        src="https://images.pexels.com/photos/11408417/pexels-photo-11408417.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
      />
      <div className="featuredTitles">
        <h1>Eka Hoel Kenya Accomm</h1>
        <h2>43</h2>
      </div>
      </div>
      </div>
  );
};

export default Featured;
