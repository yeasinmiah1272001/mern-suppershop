import img3 from "../assets/Featured Brands/sunnati.jpg";
import img4 from "../assets/Featured Brands/sunnati (1).jpg";
import img5 from "../assets/Featured Brands/square.png";
import img6 from "../assets/Featured Brands/meril.png";
import img7 from "../assets/Featured Brands/johnsons.png";
import img8 from "../assets/Featured Brands/huggies.jpg";
import img9 from "../assets/Featured Brands/fresh.jpg";
import img10 from "../assets/banner2.jpg";
import img11 from "../assets/banner3.jpg";

import Marquee from "react-fast-marquee";
import CategoryHeader from "./CategoryHeader";
import Container from "./Container";

// Sample product array with image paths
const product = [
  { id: 2, name: "Sunnati", images: [img3, img4] },
  { id: 3, name: "Square", images: [img5] },
  { id: 4, name: "Meril", images: [img6] },
  { id: 5, name: "Johnsons", images: [img7] },
  { id: 6, name: "Huggies", images: [img8] },
  { id: 7, name: "Fresh", images: [img9] },
];

const FeaturedBrands = () => {
  const title = "FeaturedBrands";
  const categories = [
    "  Baby Foods",
    "  Baby Personal Care",
    " Baby Accessories",
    " View All",
  ];
  return (
    <Container className={"mx-auto"}>
      <div>
        <CategoryHeader title={title} categories={categories} />
      </div>
      <div>
        <Marquee>
          <div className="flex space-x-16">
            {product.map((item) => (
              <div
                key={item.id}
                className=" items-center gap-3  rounded-lg transform transition-transform duration-300 ease-out"
              >
                <img
                  src={item.images[0]} // Display the first image of each brand
                  alt={item.name}
                  className=" rounded-full object-cover mb-4 border-2 p-4 border-gray-200 h-20  px-4"
                />
                {/* Uncomment below to display name */}
                {/* <h1 className="text-lg font-semibold text-gray-700">{item.name}</h1> */}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="flex gap-4">
        <img className="w-[630px]" src={img10} alt="" />
        <img className="w-[630px] " src={img11} alt="" />
      </div>
    </Container>
  );
};

export default FeaturedBrands;
