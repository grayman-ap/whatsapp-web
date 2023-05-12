//eslint-disable-next-line

import { ChatSideBar } from "../../../pages/chat-sidebar";
import { MainSection } from "../../../pages/main-section";

const MainContainer = () => {
  return (
    <div className="flex fixed h-[100vh] w-full">
      <div className="bg-primary w-[30%] border-r border-light">
        <ChatSideBar />
      </div>
      <div className="bg-secondary w-[70%] border-b-[7px] border-mainGreen">
        <MainSection />
      </div>
    </div>
  );
};
export default MainContainer;
