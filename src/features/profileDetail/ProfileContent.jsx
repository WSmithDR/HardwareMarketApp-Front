import { useSelector } from "react-redux";


export const ProfileContent = () => {

    const user = useSelector((state) => state.user.user);

    return (
        <div>
            {user?.user ? (
                <div className="flex max-[768px]:flex-col">
                    <div className="ml-3 mr-3 mt-3 w-[700px] p-5 bg-[#01242fe3] rounded-std max-[768px]:w-[auto] max-[900px]:flex-col">
                        <div className="flex items-center max-[900px]:flex-col">
                            <div className="rounded-[50%] overflow-hidden">
                                <img src="./public/images/persona.jpg" alt="" className="h-20 w-20" />
                            </div>
                            <div className="space-x-8 flex">
                                <a href="#" className="font-josefin text-white px-2 py-3 ">
                                    {user?.user && (
                                        <div className="flex justify-center items-center h-15 w-max rounded-[15px] bg-colorStar p-2">
                                            <p >
                                                {`${user.user.first_name.toUpperCase()}  ${user.user.last_name.toUpperCase()}`}
                                            </p>
                                        </div>
                                    )}
                                </a>
                            </div>
                            <span className="text-[#457a9b]">#Usuario{Math.round(Math.random() * 99999999)}</span>
                        </div>
                        <div className="flex flex-col items-start max-[900px]:items-center">
                            <small className="text-[#8dcbf8] p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cumque voluptatem eaque suscipit fuga, totam excepturi assumenda! Excepturi odio, nisi totam maxime at, quas possimus sunt fugiat sapiente ea necessitatibus.</small>
                        </div>
                    </div>
                    <div className="flex items-center justify-center ml-3 mr-3 mt-3 w-[700px] h-[150px] p-5 bg-[#01242fe3] rounded-std max-[768px]:w-[auto] text-center">
                        <h1 className="text-white font-josefin text-3xl">Lista de mis Compras</h1>
                    </div>
                </div>

            )
                : (
                    <h1 className="text-3xl bg-[#01242fe3] w-max m-[2rem_auto] p-4 text-white font-josefin rounded-std">Ingresar para ver información</h1>
                )}

        </div>
    )
}