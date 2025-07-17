import React from 'react';

interface btnProps {
  btnStyle: string;
  btnText: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}


function Button({ btnStyle, btnText, disabled = false, type = "button", onClick }: btnProps): React.ReactElement {
  return (
    <div className='inline-block rounded-tr-xl rounded-bl-xl bg-green-300 p-1'>
      <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative ${btnStyle} text-white font-bold uppercase text-lg border-green-300 cursor-pointer`}>
        {btnText}
        <span className='block w-1/2 h-0.5 bg-white mt-2 mx-auto opacity-100 transition-opacity duration-200 group-hover:opacity-0'></span>
      </button>
    </div>
  );
}

export default Button;
