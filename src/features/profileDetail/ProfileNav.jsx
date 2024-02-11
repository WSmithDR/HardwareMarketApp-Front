import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../redux/userReducer/userActions"

export const ProfileNav = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(userActions.userLogOutAction())
        navigate("/login")
    }
    return (
        <>
            <header
                className="flex items-center justify-around space-x-1 md:space-x-2 bg-colorButtons shadow h-[70px] pt-1 rounded-[10px] md:rounded-b-std 
                ml-3 mr-3 md:rounded-[10px] mt-2 md:h-[95px] w-auto "
            >
                <div className="space-x-8 flex">
                    <a href="#" className="font-josefin text-white px-2 py-3 ml-5 ">
                        {user?.user ? (
                            <div className="flex justify-center items-center h-15 w-max rounded-[15px] bg-colorStar p-2 translate-x-[-2rem]">
                                <p className="text-2xl pr-4 pl-4 max-[350px]:text-[15px] max-[350px]:p-0">
                                    Mi Perfil
                                </p>
                            </div>
                        ) : (
                            <p onClick={() => navigate("/login")}>Iniciar Sesión</p>
                        )}
                    </a>
                </div>

                <Link to="/startPage">
                    <div
                        className="items-center flex md:px-5 bg-colorButtons shadow md:h-[40px] md:mt-1 md:mr-2 
                        md:ml-2 lg:flex translate-x-[-1.5rem]"
                    >
                        <svg
                            className="w-7 h-7 text-colorStar md:w-16 md:h-12 md:pb-2 cursor-pointer
                            md:flex "
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                            ></path>
                        </svg>
                        {/* <div className="flex flex-col"> */}
                        <p
                            className="font-josefin text-center px-3 text-white py-3 
                            text-xl hidden md:flex mr-[60px]"
                        >
                            Hardware Market
                        </p>
                        {/* </div> */}
                    </div>
                </Link>

                {/* Links Navegacion */}

                {/* </div> */}

                {user?.user ? (
                    <p
                        className="text-white cursor-pointer text-[13px] pt-3 font-josefin border-b-[1px]"
                        onClick={() => handleLogOut()}
                    >
                        Cerrar Sesion
                    </p>
                ) : null}

                {/* Navegacion Mobile (menu desplegable)*/}
                <div className="bg-colorStar p-4 mt-1 shadow space-y-1 pb-24 pt-2 rounded-b-xl sm:hidden hidden">
                    <a
                        href="#"
                        className="flex items-center text-black font-josefin  
                        transition-colors hover:bg-colorButtons hover:text-white px-2 py-3  rounded-md "
                    >
                        <svg
                            className=" w-8 h-8 m-1 px-1"
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            ></path>
                        </svg>
                        Inicio
                    </a>
                    <a
                        href="#"
                        className="flex items-center font-josefin
                        transition-colors bg-colorButtons text-white px-2 py-3 rounded-md "
                    >
                        <svg
                            className=" w-8 h-8 m-1 px-1"
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            ></path>
                        </svg>
                        Mi Cuenta
                    </a>
                    <a
                        href="#"
                        className="flex items-center text-black font-josefin
                        transition-colors hover:bg-colorButtons hover:text-white px-2 py-3 rounded-md "
                    >
                        <svg
                            className=" w-8 h-8 m-1 px-1"
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            ></path>
                        </svg>
                        Favoritos
                    </a>
                </div>
            </header>
        </>
    );
};

