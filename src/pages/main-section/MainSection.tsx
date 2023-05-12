import React from "react";
import { starter } from "../../assets";
function MainSection() {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <img src={starter} alt="starter" className="w-[100%] p-10" />
      <div className="text-white text-center space-y-1">
        <div>
          <h2 className="my-2 text-[32px] font-light text-textPrimary">
            Whatsapp Web
          </h2>
        </div>
        <div className="text-textPrimary/50 text-[14px] space-y-1">
          <p>Send and recieve message without keeping phone online.</p>
          <p>
            Use Whatsapp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
