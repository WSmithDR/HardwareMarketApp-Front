import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {


  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/startPage")
    }, 4000)
  }, [])
  return (
    <div className="gap-5 w-full h-screen bg-[#01242F] flex justify-center items-center flex-col text-white ">
      <div>
        <img className='w-28' src='/public/images/h.png' alt='cuadrado'></img>

      </div>
      <div className='text-center'>
        <h1 className="text-3xl font-josefin">
          Hardware Market
        </h1>
        <p className=''>BUEN ESTADO BUENOS PRODUCTOS</p>
      </div>
      <svg
        className="animate-spin h-12 w-12"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M18.364 5.636 16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"
          fill="#ffffff"
          className="fill-000000"
        ></path>
      </svg>
    </div>

  )
}

export default WelcomePage;
