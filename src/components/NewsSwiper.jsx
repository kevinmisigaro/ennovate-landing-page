import React, { useState, useEffect } from "react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import News from './../pages/News';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Pagination,Scrollbar.A11y],
// });

const NewsSwiper = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await fetch("http://192.168.1.247:7002/latest-news");
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await response.json();
      setNews(data.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    >
      {news.map((item) => (
        <SwiperSlide key={item.id}>
          {/* <div className="h-fit w-full bg-red-300">
            <h2>{item.news_title}</h2>
            <p>{item.news_details}</p>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSwiper;
