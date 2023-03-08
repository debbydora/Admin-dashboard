const Button = ({ className, title, type, onClick, loading }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {loading ? "...loading" : <p>{title}</p>}
    </button>
  );
};

export default Button;
