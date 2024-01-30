import Footer from "../../../components/footer/Footer";
import { StoreContainer } from "../containers/StoreContainer";
import { StoreNavBar } from "../containers/navigation/StoreNavBar";

export const StoreScreen = () => {
  return (
    <div className="flex flex-col  font-josefin">
      <StoreNavBar />
      <StoreContainer />
      <Footer />
    </div>
  );
};
