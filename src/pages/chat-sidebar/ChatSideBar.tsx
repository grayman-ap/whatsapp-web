import { Avatar } from "@mui/material";
import {
  FaUsers,
  MdMessage,
  BsThreeDotsVertical,
  MdDataUsage,
  TbCircleDashed,
  BiSearch,
  BiFilter,
} from "../../utils/icon";
interface IconButtonProps {
  id: number;
  icon: React.ReactNode;
}
const IconButton: IconButtonProps[] = [
  { id: 1, icon: <FaUsers /> },
  { id: 1, icon: <MdDataUsage /> },
  { id: 1, icon: <MdMessage /> },
  { id: 1, icon: <BsThreeDotsVertical /> },
];
function ChatSideBar() {
  return (
    <section>
      <div>
        <div className="bg-secondary p-2.5">
          <div className="flex justify-between w-[95%] mx-auto items-center">
            <div className="text-[10px]">
              <Avatar sx={{width:40,height:40}}/>
            </div>
            <div className="flex space-x-5">
              {IconButton.map((item, index) => (
                <div key={index} className="rounded-full p-1 cursor-pointer">
                  <div className="text-textPrimary text-[20px]">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-2 items-center mt-2">
          <div className="flex gap-10 items-center bg-secondary text-textPrimary w-[88%] rounded-lg p-1.5">
            <div className="ml-2">
              <BiSearch />
            </div>
            <input
              type="text"
              placeholder="Search or start new chat"
              className="bg-transparent focus:outline-none placeholder:text-[13px] placeholder:font-light"
            />
          </div>
          <div className="text-textPrimary text-[24px]">
            <BiFilter />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatSideBar;
