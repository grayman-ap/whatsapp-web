import { Avatar } from "@mui/material";
import { useState } from "react";
import { IconButton, UserSideBar } from "../../utils/fakedata";
import { MdOutlineSearch, BiFilter, FaLock } from "../../utils/icon";
import { team4} from "../../assets";
function ChatSideBar() {
  const [active, setActive] = useState<number>(1);
  const [activeState, setActiveState] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredUsers = searchQuery
    ? UserSideBar.filter(user => user.userName.toLowerCase().includes(searchQuery))
    : UserSideBar;

  return (
    <section>
      {/* header section */}
      <div>
        <div className="bg-secondary p-2">
          <div className="flex justify-between w-[98%] mx-auto items-center">
            <div className="text-[10px]">
              <Avatar sx={{ width: 40, height: 40 }} src={team4} />
            </div>
            <div className="flex space-x-2">
              {IconButton.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index === active && activeState
                      ? "bg-white/5 animate-pulse"
                      : ""
                  } rounded-full p-[10px] cursor-pointer transition-all ease-in-out duration-150`}
                  onClick={() => {
                    setActive(index);
                    setActiveState(true);
                  }}
                >
                  <div className="text-textPrimary text-[22px]">
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
        <div className="flex justify-center space-x-1 items-center py-2">
          <div className="flex gap-10 items-center bg-secondary text-textPrimary w-[88%] rounded-lg p-1.5 ml-4">
            <div className="ml-2 text-[20px] text-textPrimary/60">
              <MdOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="Search or start new chat"
              onChange={handleSearch}
              className="bg-transparent w-[90%] focus:outline-none  placeholder:text-[13px] placeholder:font-light"
            />
          </div>
          <div className="rounded-full p-1.5 cursor-pointer">
            <div
                  className={`${
                   activeState
                      ? "bg-white/5 animate-pulse"
                      : ""
                  } rounded-full p-[10px] cursor-pointer transition-all ease-in-out duration-150 text-textPrimary/60 text-[22px]`}
                  onClick={() => {
     
                    setActiveState(true);
                  }}
                >
              <BiFilter />
            </div>
          </div>
        </div>
      </div>
      {/* user section */}
      <div className="h-[100vh] mx-auto">
        <div className="flex flex-col overflow-scroll h-[90%] text-white pr-2">
        {filteredUsers.map((user, index) => (
            <div key={index} className="flex  hover:bg-light/80">
              <div className="w-[20%] p-2 flex items-center">
                {user.profileImage} 
              </div>
              <div className="w-[100%] mt-3 pr-2">
                <div className="flex justify-between items-center ">
                  <h3>{user.userName}</h3>
                  <div className="text-[12px] font-bold text-textPrimary/60">{user.localeTime}</div>
                </div>
                <div className="flex justify-between items-center " >
                  <p  className="text-[15px]">~{user.lastUser}</p>
                  <div className="rounded-full p-1 w-[8%] text-[12px] text-black bg-[#07c498]/80 text-center">{user.chatNumber}</div>
                </div>
                <div className="w-full h-[1px] bg-light mt-4">
                  </div>
              </div>
            </div>
          ))}
           <div className=" bottom-0 p-4 mb-10 w-full justify-center flex items-center space-x-1 text-textPrimary">
        <div className="flex items-baseline text-[12px]"><FaLock /></div>
        <p className='text-[12px] font-light'>Your personal messages are end-to-end encrypted</p>
      </div>
        </div>
      </div>
    </section>
  );
}

export default ChatSideBar;
