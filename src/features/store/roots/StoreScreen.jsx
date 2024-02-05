import Footer from "../../../components/footer/Footer";
import { StoreContainer } from "../containers/StoreContainer";
import { StoreNavBar } from "../containers/navigation/StoreNavBar";

export const StoreScreen = () => {
  return (
    <div className="w-auto min-h-screen  flex flex-col justify-between  font-josefin   max-[320px]:w-[400px] max-[375px]:w-[400px] ">
      <StoreNavBar />
      <StoreContainer />
      <Footer />
    </div>
  );
};
