import { StoreNavBar } from "../store/containers/navigation/StoreNavBar";

export const Detail = () => {
  return (
    <div className="">
      <StoreNavBar />

      <div className="flex items-center justify-center p-10">
        <div>
          <img
            src="./public/images/grafica.jpg"
            alt=""
            className="w-80 h-80 rounded-l-lg"
          />
        </div>
        <div className="h-[320px] w-[550px] bg-[#DCDBDB] rounded-r-lg"></div>
      </div>
      <div className="flex items-center justify-center">Description</div>
    </div>
  );
};
