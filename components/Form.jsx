function Form({ title, className, footer, onSubmit, children }) {
  return (
    <div
      className={`flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 ${
        className ? className : ""
      }`}
    >
      <div
        className={`w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg ${
          className ? className : ""
        }`}
      >
        <div className="-space-y-px">
          <p className="title">{title}</p>
        </div>
        <form
          className="form-container__content"
          onSubmit={(e) => onSubmit && onSubmit(e)}
        >
          {children}
        </form>
      </div>
      {footer}
    </div>
  );
}

function Footer({ children, className }) {
  return (
    <div
      className={`form-container__footer flex ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

// function Input({
//   placeHolder,
//   onChange,
//   error,
//   className,
//   defaultValue,
//   inputClassName,
//   disabled,
//   children,
//   label,
//   type,
//   required,
//   value,
//   name,
//   allowShowPassword,
//   min,
//   max,
// }) {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const inputProps = {
//     name,
//     disabled,
//     defaultValue,
//     type,
//     value,
//     required,
//     className: `input ${inputClassName ? inputClassName : ""}`,
//     onChange: (e) => onChange && onChange(e),
//     placeholder: placeHolder,
//     autoComplete: "off",
//     min,
//     max,
//   };

//   return (
//     <div
//       className={`form-container__contentInput ${className ? className : ""}`}
//     >
//       <small>{label}</small>
//       {children ? (
//         children
//       ) : type === "password" && allowShowPassword ? (
//         <div className="password-eye-wrap">
//           <input {...inputProps} type={showPassword ? "text" : "password"} />
//           <img
//             src={require("../../../assets/images/eye-regular.svg")}
//             alt="show password"
//             className="pointer"
//             onMouseDown={() => setShowPassword(true)}
//             onMouseUp={() => setShowPassword(false)}
//           />
//         </div>
//       ) : (
//         <input {...inputProps} />
//       )}

//       {error ? <p>{error}</p> : ""}
//     </div>
//   );
// }

function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  name,
  type,
  isRequired = false,
  placeholder,
  className,
}) {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className="block text-sm font-medium text-gray-700 undefined"
      >
        {labelText}
      </label>
      <div className="flex flex-col items-start">
        <input
          onChange={handleChange}
          value={value}
          name={name}
          type={type}
          required={isRequired}
          className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            className ? className : ""
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

Form.Footer = Footer;
Form.Input = Input;

export default Form;
