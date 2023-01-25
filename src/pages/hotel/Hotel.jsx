import React, { useState } from "react";
import "./hotel.css";
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

const photos = [
  {
    src: "https://images.pexels.com/photos/5055812/pexels-photo-5055812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/5055754/pexels-photo-5055754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/5055751/pexels-photo-5055751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/5055747/pexels-photo-5055747.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/5055812/pexels-photo-5055812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/5055812/pexels-photo-5055812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l")
    {
      newSlideNumber=slideNumber===0 ? 5 : slideNumber -1
    }
    else{
      newSlideNumber=slideNumber===5 ? 0 : slideNumber +1

    }
  setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)}  className="close"/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
        <div className="sliderWrapper">
          <img className="sliderImg" src={photos[slideNumber].src} alt=""/>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Eka Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Rupa mall 7514 Eldoret</span>
          </div>
          <span className="hotelDistance">
            Excelllent location - 500m from Daima Towers
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over 15000 at this property and get a free airport Taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hetelDetailsText">
              <h1 className="hotelTitle"> Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                amet dicta voluptatibus sit soluta quisquam et blanditiis
                impedit placeat. Omnis aut repellat fugit tenetur sequi
                repudiandae perferendis atque inventore distinctio?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>It is Located in Eldoret 500m away from</span>
              <h2>
                $1000 <b>9 nights</b>
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
