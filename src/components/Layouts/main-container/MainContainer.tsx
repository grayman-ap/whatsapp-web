//eslint-disable-next-line

import { ChatSideBar } from "../../../pages/chat-sidebar";
import { MainSection } from "../../../pages/main-section";

const MainContainer = () => {
  return (
    <div className="flex h-[100vh] w-[190vw] md:w-[130vw] lg:w-full  overflow-hidden">
      <div className="bg-primary w-[90vw] md:w-[50vw] lg:w-[30%] border-r border-light">
        <ChatSideBar />
      </div>
      <div className="bg-secondary w-[100vw] md:w-[70vw] lg:w-[70%]  border-b-[7px] border-mainGreen">
        <MainSection />
      </div>
    </div>
  );
};
export default MainContainer;
