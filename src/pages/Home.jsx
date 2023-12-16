import { useState, useEffect } from "react";
import Header from "../components/Header";
import Poprular from "../components/Popular";
import TrendingNow from "../components/TrendingNow";
import Top from "../components/Top";
import Loading from "../components/Loading";
import NowPlaying from "../components/NowPlaying";
import Upcomming from "../components/Upcomming";

const Home = () => {
  // console.log(loading);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative">
        <TrendingNow />
        <Poprular />
        <Top />
        <NowPlaying />
        <Upcomming />
      </div>
    </>
  );
};

export default Home;
