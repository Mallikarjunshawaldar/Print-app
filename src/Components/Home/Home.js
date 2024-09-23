import React, { useEffect, useState } from "react";
import "./Home.css";
import { assets } from "../../assets/assets";

const Home = () => {
  const filteredAssets = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img4,
    assets.img5,
    assets.img6,
    assets.img7,
    assets.img8,
    assets.img9,
    assets.img10,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMobile) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredAssets.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, filteredAssets.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // 3 items in the section
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // 3 items in the section
  };

  return (
    <div className="home-page">
      {/* first section */}
      <div className="container">
        <div className="detail-container">
          <h1>From Design to Fabric: <br /> Discover the Art of <br />T-Shirt Printing!</h1>
          <div className="div1">
            <img src={assets.tick} alt="Thumb" />
            <span>Free to use</span>
          </div>
          <div className="div1">
            <img src={assets.tick} alt="Thumb" />
            <span>High-Quality Products</span>
          </div>
          <div className="div1">
            <img src={assets.tick} alt="Thumb" />
            <span>Largest T-Shirt printing network</span>
          </div>
          <div className="container-buttons">
            <button className="button">Start for free</button>
            <button className="button">How it works?</button>
          </div>
          <p>Transforming Ideas into Wearable Art</p>
        </div>
        <div className="img-container">
          <div className="images-con">
            {filteredAssets.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={currentIndex === index ? "active" : "fade"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* second Section */}
      <div className="section second-container">
        <div className="sec-detail-cont">
          <img src={assets.higher} alt="higher-img" />
          <h2>Higher Profits</h2>
          <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
        <div className="sec-detail-cont">
          <img src={assets.robust} alt="robust-img" />
          <h2>Robust Scaling</h2>
          <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div className="sec-detail-cont">
          <img src={assets.best} alt="best-img" />
          <h2>Best Selection</h2>
          <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section third-container">
        <div className="first-div-cont">
          <div className="group-img">
            <img src={assets.Maskgroup} alt="group img" />
          </div>
          <div className="img-cont">
            <div className="images-conss">
              {filteredAssets.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={currentIndex === index ? "active" : "fade"}
                />
              ))}
            </div>
          </div>
          <div className="tri-detail-cont">
            <h2>Custom T-Shirts Made Simple: <br /> Express Yourself with Professional Printing!</h2>
            <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <div className="a-link">
              <a href="">All products </a>
              <img src={assets.right} alt="right arrow" />
            </div>
          </div>
        </div>

        {/* Swiper for smaller screens */}
        <div className="sec-div-cont">
          {isMobile && (
            <>
              <button className="swiper-button left" onClick={prevSlide}>{"<"}</button>
              <button className="swiper-button right" onClick={nextSlide}>{">"}</button>
            </>
          )}
          <div className={`tri-detail-cont2 ${currentIndex === 0 ? 'active' : ''}`}>
            <img src={assets.higher} alt="higher-img" />
            <h1>CREATE</h1>
            <h2>custom products</h2>
            <p>Create unique custom products tailored to your needs, offering personalized designs and high-quality materials for every occasion.</p>
          </div>
          <div className={`tri-detail-cont2 ${currentIndex === 1 ? 'active' : ''}`}>
            <img src={assets.robust} alt="robust-img" />
            <h1>SELL</h1>
            <h2>on your terms</h2>
            <p>Sell on your terms with flexible options, setting your own prices, managing inventory, and maximizing your profits effortlessly.</p>
          </div>
          <div className={`tri-detail-cont2 ${currentIndex === 2 ? 'active' : ''}`}>
            <img src={assets.best} alt="best-img" />
            <h1>WE HANDLE</h1>
            <h2>fulfillment</h2>
            <p>We handle fulfillment seamlessly, taking care of production, packaging, and shipping, timely deliveries and ensuring complete customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
