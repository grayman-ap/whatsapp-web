import { Avatar,IconButton } from "@mui/material";
import { FaUsers,MdMessage, BsThreeDotsVertical, MdDataUsage, TbCircleDashed} from "../../utils/icon";
function Header() {
  const iconButton = `text-textPrimary text-[20px]`
  return (
    <div className="bg-secondary p-2.5">
      <div className="flex justify-between">
        <div>
          <Avatar />
        </div>
        <div className="flex space-x-3">
          <IconButton>
            <FaUsers className={`${iconButton}`}/>
          </IconButton>
          <IconButton>
            <TbCircleDashed className={`${iconButton}`}/>
          </IconButton>
          <IconButton>
            <MdMessage className={`${iconButton}`}/>
          </IconButton>
          <IconButton>
            <BsThreeDotsVertical className={`${iconButton}`}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
