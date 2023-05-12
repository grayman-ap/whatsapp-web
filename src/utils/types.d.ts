import React from "react";

//Header button Propss
export interface IconButtonProps {
    id: number;
    icon: React.ReactNode;
  }

  //user chat tab
  export interface UserSideBarProps{
    id:1,
    profileImage:React.ReactNode | any,
    userName: string,
    lastUser: string,
    localeTime:any,
    chatNumber:number
  }