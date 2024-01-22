import React from "react";

export const Forms = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorButtons">
      <div className="flex flex-col items-center justify-center w-72 lg:w-2/4 h-[700px] bg-customColor my-4 lg:my-8">
        <div className="mb-4 lg:mb-8">
          <label htmlFor="input1">Campo 1</label>
          <input type="text" id="input1" />
        </div>

        <div className="mb-4 lg:mb-8">
          <label htmlFor="input2">Campo 2</label>
          <input type="text" id="input2" />
        </div>

        <p>Continuar Como Visitando</p>
      </div>

      {/* <div className='flex flex-col items-center justify-center w-2/4 h-screen bg-customColor '>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            
            <p>Continuar Como Visitando</p>
        </div> */}
    </div>
  );
};
