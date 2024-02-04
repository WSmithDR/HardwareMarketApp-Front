import { useNavigate } from "react-router-dom";

const BackTo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[40px]  flex justify-start items-center p-8 font-josefin ">
      <p
        onClick={() => navigate("/startPage")}
        className="text-white cursor-pointer p-5"
      >
        Volver
      </p>
    </div>
  );
};

export default BackTo;
