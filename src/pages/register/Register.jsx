// import React from 'react'

export const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-colorButtons">
      <h1 className="text-white">Registrate</h1>
      <div>
        <div className="m-10">
          <input type="text" placeholder="Nombre" />
        </div>

        <div className="m-10">
          <input type="text" placeholder="Apellido" />
        </div>

        <div className="m-10">
          <input type="text" placeholder="Edad" />
        </div>

        <div className="m-10">
          <input type="text" placeholder="Correo Electronico" />
        </div>

        <div className="m-10">
          <input type="text" placeholder="Contrasena" />
        </div>
      </div>
      <button>Resgistrarse</button>
    </div>
  );
};
