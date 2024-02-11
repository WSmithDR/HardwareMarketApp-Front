import { useSelector } from "react-redux";


export const ProfileContent = () => {

    const user = useSelector((state) => state.user.user);
    const upperFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

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
                                <p href="#" className="font-josefin text-white px-2 py-3 ">
                                    {user?.user && (
                                        <div className="flex justify-center items-center h-15 w-max rounded-[15px] bg-colorStar p-2">
                                            <p >
                                                {`${upperFirstLetter(user.user.first_name)}  ${upperFirstLetter(user.user.last_name)}`}
                                            </p>
                                        </div>
                                    )}
                                </p>
                            </div>
                            <span className="text-[#457a9b]">#Usuario{Math.round(Math.random() * 99999999)}</span>
                        </div>
                        <div className="flex flex-col items-start max-[900px]:items-center">
                            <small className="text-[#8dcbf8] p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cumque voluptatem eaque suscipit fuga, totam excepturi assumenda! Excepturi odio, nisi totam maxime at, quas possimus sunt fugiat sapiente ea necessitatibus.</small>
                        </div>
                        <div className="text-white font-serafin">
                            <h1 className="text-2xl mt-2 mb-2">Información Detallada</h1>
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <h2 className="text-[#4c9af9]">Nombre Completo:</h2>
                                    <p>{`${upperFirstLetter(user.user.first_name)}  ${upperFirstLetter(user.user.last_name)}`}</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <h2 className="text-[#4c9af9]">Correo Electrónico:</h2>
                                    <p>{`${upperFirstLetter(user.user.email)}`}</p>
                                </li>
                                <li className="flex gap-2">
                                    <h2 className="text-[#4c9af9]">Pais:</h2>
                                    <input type="text" placeholder="Ingrea tu pais de residencia" className="outline-none bg-transparent w-[250px] border-b border-[#4284b3] placeholder-[#8dcbf8]"/>
                                </li>
                                <li className="flex gap-2">
                                    <h2 className="text-[#4c9af9]">Numero de telefono/celular:</h2>
                                    <input type="number" placeholder="11-1111-1111" className="outline-none bg-transparent w-[100px] border-b border-[#4284b3] placeholder-[#8dcbf8]"/>
                                </li>
                                <li className="flex gap-2">
                                    <h2 className="text-[#4c9af9]">LinkedIn:</h2>
                                    <input type="number" placeholder="in/" className="outline-none bg-transparent w-[150px] border-b border-[#4284b3] placeholder-[#8dcbf8]"/>
                                </li>
                                <li className="flex gap-2">
                                    <h2 className="text-[#4c9af9]">GitHub:</h2>
                                    <input type="number" placeholder="username" className="outline-none bg-transparent w-[150px] border-b border-[#4284b3] placeholder-[#8dcbf8]"/>
                                </li>
                            </ul>
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