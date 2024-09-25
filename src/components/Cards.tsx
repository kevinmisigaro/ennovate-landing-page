import React from "react";
const Cards = () => {
  return (
    <>
      <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
          <div className="bg-yellow-500 p-4">
            <h2 className="text-2xl font-bold text-white">Who Can Apply</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">
                  Post-revenue startups in Tanzania and across East Africa.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">
                  At least 2 full-time founders and/or an active management
                  team.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">
                  Verifiable market traction, with relevant data to show
                  business activities.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">
                  Fully registered business within their local laws.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">
                  Startup with compelling impact stories.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Selection Process Card */}
        <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800">
          <div className="bg-yellow-500 p-4">
            <h2 className="text-2xl font-bold text-white">Selection Process</h2>
          </div>
          <div className="p-6">
            <ol className="space-y-4 list-decimal list-inside">
              <li className="pb-4 border-b border-gray-700">
                <span className="font-semibold text-white">
                  Initial Application Review
                </span>
                <p className="mt-2 text-gray-400">
                  Our team will carefully review all submitted applications.
                </p>
              </li>
              <li className="pb-4 border-b border-gray-700">
                <span className="font-semibold text-white">
                  Interview with pre-selected startups
                </span>
                <p className="mt-2 text-gray-400">
                  Shortlisted applicants will be invited for an interview.
                </p>
              </li>
              <li className="pb-4 border-b border-gray-700">
                <span className="font-semibold text-white">
                  Selection Committee review meeting
                </span>
                <p className="mt-2 text-gray-400">
                  The committee will evaluate interviewed startups.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Final selection
                </span>
                <p className="mt-2 text-gray-400">
                  Successful applicants will be notified of their selection.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </>
    )
  }

export default Cards;
