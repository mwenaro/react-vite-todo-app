
const Button = ({
  children,
  onClick,
  disabled,
  className,
}) => (
  <button                                                      className={` bg-skin-primary text-white font-bold p-4 px-8 rounded hover:border-2 hover:border-white  hover:border-solid hover:rounded text-base ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;