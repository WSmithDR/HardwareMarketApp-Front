

export const Offer = ({offer}) =>{
    return(
        <div>
            {
                offer == 0
                ? <p>No está en oferta</p>
                : <p>{offer}% de descuento</p>
            }
        </div>
    )
}