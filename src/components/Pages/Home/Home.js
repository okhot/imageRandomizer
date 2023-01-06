import React from "react";
import BodySection from "../../templates/bodySection/BodySection";
import HeroSection from "../../templates/heroSection/HeroSection";
import useGenerateImage from "../../useGenerateImage";

export default function Home() {
  const { generate, number } = useGenerateImage();

  return (
    <div>
      <HeroSection useGenerate={generate} />
      <BodySection bodyNum={number} />
    </div>
  );
}
