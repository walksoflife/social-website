import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/sidebars/Sidebar";
import { AuthContext } from "../context/AuthContext";
import Main from "../components/main/Main";
import TopSub from "../components/subs/TopSub";
import UnAuthorized from "../components/pageErrors/UnAuthorized";

const Home = () => {
  const [backToTop, setBackToTop] = useState(false);
  const { currentUser, setCurrentUser, errorPage } = useContext(AuthContext);
  const [showTopSub, setShowTopSub] = useState(false);
  const [isPage401, setIsPage401] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 500) {
  //       setBackToTop(true);
  //     } else {
  //       setBackToTop(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      setShowTopSub(true);

      setTimeout(() => {
        setShowTopSub(false);
      }, 5000);
    });
  }, [currentUser]);

  const [openCreate, setOpenCreate] = useState(false);

  // unauthorized page
  useEffect(() => {
    if (errorPage) {
      setIsPage401(true);
    }
  }, [errorPage]);

  return (
    <div className={isPage401 ? "home unauthorized" : "home"}>
      {showTopSub && <TopSub />}
      <Sidebar openCreate={openCreate} setOpenCreate={setOpenCreate} />
      <Main openCreate={openCreate} />
      {/* {backToTop && (
        <button onClick={scrollUp} className="backToTop">
          Back To Top
        </button>
      )} */}
      {isPage401 && (
        <UnAuthorized
          setIsPage401={setIsPage401}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
};

export default Home;
