import Image from "next/image";
import backgroundImage from "../../images/thiasil-2.webp";
import logoImage from "../../images/thiasil-1.webp";
import "./Hero.css";
import Button from "../MainButton/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with clip-path */}
      <div className="absolute inset-0 bg-image-clippath">
        <Image
          src={backgroundImage}
          alt="Lab Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Gradient overlay with clip-path */}
        <div className="absolute inset-0 bg-gradient-clip-path"></div>
      </div>

      {/* Logo in the top-left */}
      <div className="absolute top-8 left-6 md:left-10 z-20">
        <Image src={logoImage} alt="Logo" width={40} height={40} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white w-full h-full">
        <h1 className="text-5xl md:text-6xl leading-[102px] letter-spacing mt-[-7rem] mb-0 md:mb-5 hero-animation text-animate-left">
          THIASIL
        </h1>
        <p className="text-base md:text-xl leading-5 md:leading-10 letter-spacing_subheading font-semibold mb-10 hero-animation text-animate-right">
          INDIVIDUALLY OXY-GAS <br /> FIRED LABWARE
        </p>

        <div className="hero-animation button-animate-bottom">
          <Link href="#popular-products">
            <Button
              name="Discover our products"
              color="#777777"
              bgColor="#ffffff"
              textSize="text-sm md:text-base"
              padding="px-7 md:px-10 py-3 md:py-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
