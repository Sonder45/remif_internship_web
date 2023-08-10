"use client";
import Image from "next/image";
import Header from "@/components/header";
import Main from "@/components/main";
import MainPage from "@/components/header";
import SectionOne from "@/components/sectionOne";
import WomenSection from "@/components/womenSection";
import MenSection from "@/components/menSection";
import GroupCards from "@/components/cards";
import AboutPage from "@/components/about";
import SubscribeSection from "@/components/subscribe";
import Footer from "@/components/footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <SectionOne />
      <WomenSection />
      <MenSection />
      <div className="w-full flex justify-center ">
        <div className="grid lg:grid-cols-4 lg:space-x-2 grid-cols-2 gap-[10px] p-[10px] justify-between">
          <GroupCards
            img="/img/img1.png"
            caption="Zweiseitiger Wendemantel Mit Schmetterlingsxzds"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
          <GroupCards
            img="/img/img2.png"
            caption="Écharpe tisée avec bords contrastants et franges"
            additionalColor="+17 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
            isColor
          />
          <GroupCards
            img="/img/img3.png"
            caption="Трикотажный Супер Мягкий Плед Контрастного Оттенка"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
          <GroupCards
            img="/img/img4.png"
            caption="Кардиган в Стиле Колор-Блок с V-Образным Воротником"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
          <GroupCards
            img="/img/img (4).png"
            caption="Zweiseitiger Wendemantel Mit Schmetterlingsxzds"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
          <GroupCards
            img="/img/img (5).png"
            caption="Écharpe tisée avec bords contrastants et franges"
            additionalColor="+17 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
            isColor
          />
          <GroupCards
            img="/img/img (6).png"
            caption="Трикотажный Супер Мягкий Плед Контрастного Оттенка"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
          <GroupCards
            img="/img/img (7).png"
            caption="Кардиган в Стиле Колор-Блок с V-Образным Воротником"
            additionalColor="+6 colors"
            previousPrice="$ 299.00"
            discount="$ 79.00"
          />
        </div>
      </div>
      <AboutPage />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
