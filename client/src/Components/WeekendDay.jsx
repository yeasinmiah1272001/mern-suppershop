import { useEffect, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment";
import ProductCard from "./ProductCard";
import { serverUrl } from "../../Config";
import axios from "axios";

const WeekendDay = () => {
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
      (item) => item.category === "Weekday Deals"
    );
    setCategory(filterProduct);
  }, [products]);

  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    // Set the end date (1 year from now)
    const endDate = moment().add(2, "years");

    // Function to calculate remaining time
    const calculateRemainingTime = () => {
      const now = moment();
      const duration = moment.duration(endDate.diff(now));
      setRemainingTime(duration);
    };

    // Calculate the remaining time initially
    calculateRemainingTime();

    // Update the time every second
    const interval = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="flex justify-between border-b border-gray-500 p-1 items-center mb-6">
        <div>
          <SectionTitle
            className={""}
            title={"Weekday Deals!! Buy & Save More"}
          />
        </div>
        <div className="flex gap-2 text-xl font-semibold bg-red-500 text-white px-2 rounded-md">
          <h3>End In :</h3>
          {remainingTime ? (
            <p className="">
              {remainingTime.days()} days {remainingTime.hours()} hours{" "}
              {remainingTime.minutes()} minutes {remainingTime.seconds()}{" "}
              seconds
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <Swiper
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
        className="p-4"
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

export default WeekendDay;
