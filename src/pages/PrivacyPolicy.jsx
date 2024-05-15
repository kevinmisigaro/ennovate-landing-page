import React, { useState } from "react";
import policy from "../assets/docs/policy.pdf";

function PrivacyPolicy() {
  return (
    <div>
      <embed src={policy} type="application/pdf" className="w-full h-screen" />
    </div>
  );
}

export default PrivacyPolicy;
