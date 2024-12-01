import React from "react";
import Banner from "../../Components/Banner";
import ServicesTag from "../../Components/ServicesTag";
import WeekendDay from "../../Components/WeekendDay";
import PopularCategories from "../../Components/PopularCategories";
import IslamicItems from "../../Components/IslamicItems";
import OrganicFoods from "../../Components/OrganicFoods";
import ProductSection from "../../Components/ProductSection";
import FeaturedProducts from "../../Components/FeaturedProducts";
import ExclusiveProducts from "../../Components/ExclusiveProducts";
import WomensCare from "../../Components/WomensCare";
import FoodGrocery from "../../Components/FoodGrocery";
import SkinCare from "../../Components/SkinCare";
import BabyMother from "../../Components/BabyMother";
import TrendingProducts from "../../Components/TrendingProducts";
import ComputerAccessories from "../../Components/ComputerAccessories";
import Electronics from "../../Components/Electronics";
import Pharmacy from "../../Components/Pharmacy";
import PetCare from "../../Components/PetCare";
import AuthnthicBanner from "../../Components/AuthnthicBanner";
import FeaturedBrands from "../../Components/FeaturedBrands";
import SupperShopApp from "../../Components/SupperShopApp";
import NewsletterSection from "../../Components/NewsletterSection";
import ExclusiveBanner from "../../Components/ExclusiveBanner";

const Home = () => {
  return (
    <div className="">
      <Banner />

      <ServicesTag />
      <WeekendDay />
      <PopularCategories />
      <IslamicItems />
      <OrganicFoods />
      <AuthnthicBanner />
      <FeaturedProducts />
      <ProductSection />
      <WomensCare />
      <FoodGrocery />
      <SkinCare />
      <FeaturedBrands />
      <BabyMother />
      <TrendingProducts />
      <ComputerAccessories />
      <ExclusiveBanner />
      <ExclusiveProducts />
      <Electronics />
      <Pharmacy />
      <PetCare />
      <SupperShopApp />

      {/* <NewsletterSection /> */}
    </div>
  );
};

export default Home;
