import React from "react";
import image1 from "../assets/image2.jpg";

function Syndicate() {
    return (
        <div
            className="sm:w-full sm:h-fit sm:flex sm:flex-row sm:items-center sm:justify-evenly px-4 py-8 box-border bg-white overflow-clip xl:h-[70vh] xl:relative">
            <div
                className="h-fit w-full flex-col sm:h-full sm:w-[50%] sm:flex sm:flex-col sm:items-start sm:justify-center xl:flex xl:flex-col xl:items-start xl:justify-evenly">
                <h2 className="font-medium font-poppins text-3xl text-black mb-4 xl:text-5xl ">
                    Syndicating with TheNextHub
                </h2>
                <p className="font-poppins text-lg text-justify xl:leading-[3rem] xl:-mt-12">
                    TheNextFund syndicate network is a group of passionate early stage
                    investors that are backing micro funds and startups that are shaping
                    today for tomorrow’s prosperity. Joining our syndicate network will
                    give you a platform to access the most exciting investment deals
                    across Africa. Through our syndication technology, we have automated
                    our syndication process to make it seamless; from deal flow analysis
                    to investment and portfolio management.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <div
                    className="h-[28em] w-[30em] hidden sm:h-[30em] rounded-full sm:flex items-center justify-center sm:justify-end bg-yellow-500 xl:h-[40em] xl:w-[40em]">
                    <img
                        src={image1}
                        alt=""
                        className="h-[26em] w-[26em] sm:rounded-full object-cover xl:h-[36em] xl:w-[36em]"
                    />
                </div>
            </div>
            <h1 className="absolute xl:top-[20%] xl:left-24 xl:text-9xl xl:font-bold xl:w-[20%] xl:h-72 xl:text-wrap text-yellow-500 text-opacity-15 ">TheNextHub</h1>
        </div>
    );
}

export default Syndicate;
