import React from "react";

function NotFound() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-poppins font-semibold text-slate-700 text-center">
        the page you requested wasn't found on this server!
      </h1>
    </div>
  );
}

export default NotFound;
