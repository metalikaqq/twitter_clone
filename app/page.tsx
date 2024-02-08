import SideBar from "@/components/SideBar/SideBar";
import s from "./page.module.scss";
import React from "react";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

const checkAuthStatus = async () => {
  if (typeof window !== "undefined" && window.localStorage.getItem("token")) {
    return "true";
  }

  return "false";
};

function page() {
  const info = checkAuthStatus();

  // const checkAuthStatus = async () => {
  //   if (localStorage.getItem('token')) {
  //     console.log('check auth');

  //     await dispatch(checkAuth()).then((res: any) => {
  //       if (typeof res === 'string') {
  //         navigate('/auth/verify', { replace: true });

  //         return;
  //       }

  //       if (res) {
  //         console.log('ID', res.payload.id);
  //         disconnectSocket();

  //         connectSocket(res.payload.id);

  //         navigate('/app/chats', { replace: true });
  //       }
  //     });
  //   }
  // }

  return (
    <div className={s.container}>
      <SideBar />
      <div />

      <div className={s.page}>
        <Header />

        <Main />
      </div>
    </div>
  );
}

export default page;
