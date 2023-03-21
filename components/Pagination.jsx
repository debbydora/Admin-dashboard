import Image from "next/image";

const Pagination = ({
  onPrev,
  onNext,
  currentPage,
  dataPerPage,
  totalPages,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPages / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {totalPages > 0 && (
        <div className="flex">
          {currentPage !== 1 && (
            <Image
              src="/chevron_left.svg"
              alt="back arrow"
              width={20}
              height={20}
              className="active:bg-purple-100 cursor-pointer"
              onClick={() => onPrev && onPrev()}
            />
          )}
          <span className=""> {currentPage}</span>
          &nbsp;of {totalPages}
          {currentPage !== totalPages && (
            <Image
              src="/chevron_right.svg"
              alt="forward arrow"
              width={20}
              height={20}
              className="active:bg-purple-100 cursor-pointer"
              onClick={() => onNext?.()}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
