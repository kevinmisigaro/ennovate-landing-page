import React from "react";

function HighLightsCard({ docLink, description, heading, avatar }) {
  const handleDownload = () => {
    const filePath = docLink;
    const fileName = 'document.pdf'; // Name of the downloaded file

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Cleanup: Remove the anchor from the DOM
    document.body.removeChild(link);
  };


  return (
    <div class="w-[80%] relative h-fit md:h-[20rem] my-8 mx-[10%] flex flex-col md:flex-row items-center justify-evenly bg-neutral-950 rounded-xl border md:border-yellow-500 border-yellow-600 box-border ">
      <div className="hidden md:block">
        <img
          src={avatar}
          alt=""
          className="h-72 w-full rounded-xl md:rounded-lg p-1 md:m-0"
        />
      </div>
      <div className="h-full md:w-1/3 p-2 mt-2 md:mt-8 lg:mt-12">
        <h2 className="text-white font-bold text-xl mt-1 mb-4">
          {heading}
        </h2>
        {/* <p className="text-white">some really cool description</p> */}
        <p className="text-white font-thin h-fit">
          {description}
        </p>
      </div>
      <div class=" h-40 flex items-center justify-center cursor-pointer">
        <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-yellow-600 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="white"
              fill="none"
              class="w-5 h-5 text-black"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              class="w-5 h-5 text-black"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
          <span onClick={handleDownload} class="relative text-white w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
            Apply
          </span>
        </div>
      </div>
    </div>
  );
}

export default HighLightsCard;
