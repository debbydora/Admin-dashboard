import Image from "next/image";

const Card = ({ title, info, icon }) => {
  return (
    // remove margin later
    <div className="bg-white w-auto lg:w-60 h-30 lg:h-40 border-2 border-lightViolet shadow-3xl rounded-lg box-border pt-5  pl-7 pb-7">
      {icon && <Image src={icon} alt={"card image"} width={50} height={50} />}

      <p className=" mt-3.5 w-18 h-4 text-lg leading-8 font-normal  text-dBlack">
        {title ? title : "title"}
      </p>
      <p className="mt-3 font-bold text-2xl leading-7 text-blackie uppercase w-16 h-7">
        {info && info}
      </p>
    </div>
  );
};

export default Card;
