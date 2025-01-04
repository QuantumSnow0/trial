import Image from "next/image";

const Button = ({ type, className, icon, btnName, ...props }: any) => {
  return (
    <button
      className={`${className} text-center mt-5 border border-blue-950 bg-blue-500 p-2 rounded-xl font-bold hover:bg-blue-800 cursor-pointer flex-row`}
      type={type}
      {...props}
    >
      <div className="flex flex-row justify-center items-center px-1">
        {icon && (
          <Image
            src={icon}
            alt="image"
            width={20}
            height={20}
            className="rounded-full mr-2"
          />
        )}
        <h3>{btnName}</h3>
      </div>
    </button>
  );
};

export default Button;
