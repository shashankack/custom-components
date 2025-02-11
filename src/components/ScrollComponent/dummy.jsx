import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./ScrollComponent.scss";

// Thumbnail & Content Images
import thumbnail_1 from "../../assets/ScrollComponent/thumbnail-1.jpg";
import thumbnail_2 from "../../assets/ScrollComponent/thumbnail-2.jpg";
import thumbnail_3 from "../../assets/ScrollComponent/thumbnail-3.jpg";
import thumbnail_4 from "../../assets/ScrollComponent/thumbnail-4.jpg";
import thumbnail_5 from "../../assets/ScrollComponent/thumbnail-5.jpg";
import thumbnail_6 from "../../assets/ScrollComponent/thumbnail-6.jpg";
import content_1 from "../../assets/ScrollComponent/content-1.jpg";
import content_2 from "../../assets/ScrollComponent/content-2.jpg";
import content_3 from "../../assets/ScrollComponent/content-3.jpg";
import content_4 from "../../assets/ScrollComponent/content-4.jpg";
import content_5 from "../../assets/ScrollComponent/content-5.jpg";
import content_6 from "../../assets/ScrollComponent/content-6.jpg";

const data = {
  items: [
    {
      id: 1,
      thumbnail: thumbnail_1,
      title: "Title 1",
      description: "Description 1",
      content: content_1,
    },
    {
      id: 2,
      thumbnail: thumbnail_2,
      title: "Title 2",
      description: "Description 2",
      content: content_2,
    },
    {
      id: 3,
      thumbnail: thumbnail_3,
      title: "Title 3",
      description: "Description 3",
      content: content_3,
    },
    {
      id: 4,
      thumbnail: thumbnail_4,
      title: "Title 4",
      description: "Description 4",
      content: content_4,
    },
    {
      id: 5,
      thumbnail: thumbnail_5,
      title: "Title 5",
      description: "Description 5",
      content: content_5,
    },
    {
      id: 6,
      thumbnail: thumbnail_6,
      title: "Title 6",
      description: "Description 6",
      content: content_6,
    },
  ],
};

const ScrollComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Left Section - Vertical Swiper */}
      <div className="left-section">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="thumbnail-swiper"
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={item.id} onClick={() => setActiveIndex(index)}>
              <div
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
              >
                <img src={item.thumbnail} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section - Display Active Content */}
      <div className="right-section">
        <img
          src={data.items[activeIndex].content}
          alt="Active Content"
          className="active-content"
        />
        <h2>{data.items[activeIndex].title}</h2>
        <p>{data.items[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default ScrollComponent;
