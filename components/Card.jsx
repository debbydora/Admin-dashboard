import Image from "next/image";

const Card = ({ title, info }) => {
  return (
    // remove margin later
    <div className="bg-white w-auto lg:w-60 h-30 lg:h-40 border-2 border-lightViolet shadow-3xl rounded-lg box-border pt-5  pl-7 pb-7">
      <p className=" mt-3.5 w-12 h-4 text-sm font-medium leading-4 uppercase text-lightBlue">
        Title
      </p>
      <p className="mt-3 font-semibold text-2xl leading-7 text-darkBlue uppercase w-16 h-7">
        info
      </p>
    </div>
  );
};

export default Card;
