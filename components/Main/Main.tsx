import CardItem from "@/UI/CardItem/CardItem";
import ADDBanner from "../ADDBaner/ADDBanner";
import Post from "../Post/Post";
import RegistrationBanner from "../RegistrationBanner/RegistrationBanner";
import s from "./Main.module.scss";

// const checkAuthStatus = () => {
//   const getUsers = async () => {
//     const response = await fetch("/api/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();

//     return data;
//   };
// };

function Main() {
  // const info = await checkAuthStatus();

  //   const getCookie = async (name: string) => {
  //     return cookies().get(name)?.value ?? '';
  // }

  // const cookie = await getCookie('cookie-name');

  // const checkAuthStatus = async () => {
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     let name = localStorage.getItem("refreshToken");

  //     if (!name) {
  //       name = "piska";
  //     }

  //     // const response = await fetch("/api/users", {
  //     //   method: "GET",
  //     //   credentials: 'include',
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });

  //     // const data = await response.json();

  //     return {
  //       id: 1,
  //       username: name,
  //     };
  //   }

  //   const response = await fetch("http://localhost:3000/api/refresh", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();

  //   return data;
  // };

  // const info = await checkAuthStatus();

  return (
    // <main className={s.main}>
    //   <div className={s.main__functional}>
    //     {/* <div>{JSON.stringify(info)}</div> */}

    //     <RegistrationBanner />

    //     <Post />
    //   </div>

    //   <div className={s.main__advertising}>
    //     <ADDBanner />
    //   </div>
    // </main>

    <main className={s.main}>
      <CardItem />

    </main>
  );
}

export default Main;
