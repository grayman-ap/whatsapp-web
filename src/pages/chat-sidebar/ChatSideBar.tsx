import { Avatar } from "@mui/material";
import { useState } from "react";
import { IconButton, UserSideBar } from "../../utils/fakedata";
import { MdOutlineSearch, BiFilter } from "../../utils/icon";
function ChatSideBar() {
  const [active, setActive] = useState<number>();
  const [activeState, setActiveState] = useState<boolean>();
  return (
    <section>
      {/* header section */}
      <div>
        <div className="bg-secondary p-2.5">
          <div className="flex justify-between w-[98%] mx-auto items-center">
            <div className="text-[10px]">
              <Avatar sx={{ width: 38, height: 38 }} />
            </div>
            <div className="flex space-x-2">
              {IconButton.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index === active && activeState
                      ? "bg-white/5 animate-pulse"
                      : ""
                  } rounded-full p-3 cursor-pointer transition-all ease-in-out duration-150`}
                  onClick={() => {
                    setActive(index);
                    setActiveState(activeState);
                  }}
                >
                  <div className="text-textPrimary text-[20px]">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* search section */}
      <div>
        <div className="flex justify-center space-x-1 items-center mt-2">
          <div className="flex gap-10 items-center bg-secondary text-textPrimary w-[85%] rounded-lg p-1.5">
            <div className="ml-2 text-[20px] text-textPrimary/60">
              <MdOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="Search or start new chat"
              className="bg-transparent w-[90%] rounded focus:outline-none placeholder:text-[13px] placeholder:font-light"
            />
          </div>
          <div className="rounded-full p-2 cursor-pointer">
            <div className="text-textPrimary/60 text-[24px]">
              <BiFilter />
            </div>
          </div>
        </div>
      </div>
      {/* user section */}
      <div>
        <div>
          {UserSideBar.map((user, index) => (
            <div key={index}>
              <div>
                <img src={user.profileImage} alt="profileImage" className="" />
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChatSideBar;
