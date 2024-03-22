import Image from "next/image";
import HomeBanner from "./component/HomeBanner";
import Aboutus from "./component/Aboutus";
import HomeDesignPart from "./component/HomeDesignPart";
import ClientJourney from "./component/ClientJourney";
import Buliding from "./component/Buliding";
import Testomonial from "./component/Testomonial";
import DiscloureQuestion from "./component/DiscloureQuestion";

export default function Home() {
  return (
    <>
    <div>
      <HomeBanner/>
      <Aboutus/>
      <HomeDesignPart/>
      <ClientJourney/>
      <Buliding/>
      <Testomonial/>
      <DiscloureQuestion/>
     
    </div>
    </>
  );
}
