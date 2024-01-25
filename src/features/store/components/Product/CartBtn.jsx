import cartImg from "./../../../../../public/images/carFast.png"

export const CartBtn = () =>{
    return(
        <div className=" h-[50px] w-[55px] bg-colorStar rounded-[10px] grid-cols-2">
            <button title="Añadir al carrito">
                <img src={cartImg}/>
            </button>
        </div>
    )
}