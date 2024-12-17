import React, { useEffect, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // If you want pagination functionality
import "swiper/css/navigation"; // If you want navigation buttons
import axios from "axios";
import { serverUrl } from "../../Config";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const PopularCategories = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/products/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      // console.log("data", data.product);
      if (data.success) {
        setProducts(data.product);
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  useEffect(() => {
    const filterProduct = products.filter(
      (item) => item.category === "Popular Categories"
    );
    setCategory(filterProduct);
  }, [products]);

  return (
    <Container>
      <div className="border-b border-gray-500 p-1  mb-6">
        <SectionTitle title={"Popular Categories"} />
      </div>
      <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="p-10"
        n
      >
        {category.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PopularCategories;
