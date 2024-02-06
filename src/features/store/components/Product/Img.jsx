export const Img = (prop) => {
  const { url, alt } = prop;

  return (
    <div className="cols-span-1">
      <img src={url} alt={alt} />
    </div>
  );
};
