import React from "react";
import bg from "../assets/wallpaper.jpg";
import Testimonial from "./Testimonial";
import {testimonials} from "../utils";
import Carousel from "./Carousel";
import bg2 from "../assets/image3.jpg";
import AnimatedText from "./AnimatedText.jsx";

const data = [bg, bg2, bg];

function ImageGrid({images}) {
    return (
        <div className="h-72 w-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="relative border border-yellow-400 rounded-md overflow-hidden"
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-white px-2 py-1">
                        {/* Image details or caption here */}
                    </div>
                </div>
            ))}
        </div>
    );
}

function News() {
    return (
        <div className="relative h-fit md:h-screen w-full mt-24 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center blur-lg"
                style={{backgroundImage: `url(${bg})`}}
            ></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center my-16">
                    {/*<h2 className="text-5xl font-semibold text-white text-center my-8 text-with-shadow capitalize">*/}
                    {/*  ennovate news*/}
                    {/*</h2>*/}
                    <AnimatedText text={"Testimonials"} size={52} color={"white"}/>

                    <div className="h-[2px] w-32 bg-yellow-500 my-0"></div>
                </div>
                <div className="grid w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 gap-x-8">
                    {testimonials.map((review) => (
                        <Testimonial
                            description={review.description}
                            img={review.url}
                            name={review.name}
                            title={review.title}
                            key={review.id}
                        />
                    ))}
                    {/* <Carousel imagesList={data}/> */}
                </div>
            </div>
        </div>
    );
}

export default News;
