// import React from "react";

export const Forms = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorButtons">
      <div className="flex flex-col items-center justify-center lg:w-2/4 w-[770px] h-[660px] rounded-[20px] bg-customColor my-4 lg:my-8">
        <div className="relative button-22">
          <h1 className="font-josefin relative top-[-170px] text-[26px] text-center ">
            Comemcemos escogiendo tu
            <br /> rol
          </h1>
        </div>

        <div className="mb-4 lg:mb-8 ">
          {/* <label htmlFor="input1">Campo 1</label> */}
          <input
            type="text"
            placeholder="Comprador"
            id="input1"
            className="bg-black"
          />
        </div>

        <div className="mb-4 lg:mb-8">
          {/* <label htmlFor="input2">Campo 2</label> */}
          <input
            type="text"
            placeholder="Vendedor"
            id="input2"
            className="bg-black"
          />
        </div>

        <p>Continuar Como Visitante</p>
      </div>
    </div>
  );
};
