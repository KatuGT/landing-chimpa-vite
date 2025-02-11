import React from "react";

const SendIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="send">
        <path
          id="Vector 417 (Stroke)"
          d="M15.8535 0.146461C15.995 0.287892 16.0385 0.500001 15.9642 0.68571L10.1454 15.2328C9.91841 15.8003 9.14441 15.8725 8.81629 15.3569L5.63782 10.3622L0.643079 7.18372C0.127464 6.8556 0.199737 6.0816 0.767192 5.85462L15.3143 0.0357762C15.5 -0.0385071 15.7121 0.00502989 15.8535 0.146461ZM6.63716 10.07L9.39807 14.4085L14.1311 2.57605L6.63716 10.07ZM13.424 1.86895L1.59148 6.60194L5.93005 9.36285L13.424 1.86895Z"
        />
      </g>
    </svg>
  );
};

export default SendIcon;
