const Logo = () => {
  return (
    <>
      <svg
        className=" rotate-0 scale-100 origin-center transition-transform duration-300 size-5 text-green-200"
        // width="25"
        // height="25"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0_133_21)">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M99.9759 100C44.7585 99.987 -2.80187e-06 55.2204 -7.62939e-06 1.74846e-05L200 0C200 55.2204 155.242 99.987 100.024 100C155.242 100.013 200 144.78 200 200H1.11288e-06C1.11288e-06 144.78 44.7585 100.013 99.9759 100Z"
            fill="url(#paint0_linear_133_21)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_133_21"
            x1="157.5"
            y1="32"
            x2="44"
            y2="147.5"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop offset="0.0509862" stop-color="grey" />{" "}
            <stop offset="1" stop-color="white" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_133_21">
            {" "}
            <rect width="200" height="200" fill="white" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </svg>
    </>
  );
};
export default Logo;
