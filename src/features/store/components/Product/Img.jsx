

export const Img = ({url,alt}) =>{
    return(
        <div className="cols-span-1">
            <img src={url} alt={alt}/>
        </div>
    )
}