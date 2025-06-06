import React from "react";

interface SvgProps {
  fill?: string;
  width?: string; // Changed from string | number
  height?: string; // Changed from string | number
  className?: string;
}

const PowerAutomateLogo: React.FC<SvgProps> = ({
  width = "96px",
  height = "96px",
  // fill is accepted for consistency but not directly used by this SVG's root
  // as paths have their own gradient fills.
  // It could be used if we wanted to override a specific path's fill conditionally.
  fill = "#000000", // Changed default from "none"
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 96 96"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>Power Automate Logo</title>
    <defs>
      <filter id="filter0_f_powerautomate">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur" />
      </filter>
      <filter id="filter1_f_powerautomate">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="paint0_linear_powerautomate" x1="43" y1="55" x2="29" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0D36A5" />
        <stop offset="1" stopColor="#1152D4" />
      </linearGradient>
      <linearGradient id="paint1_linear_powerautomate" x1="46" y1="10" x2="46" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#84CAFF" />
        <stop offset="1" stopColor="#61B1FB" />
      </linearGradient>
      <linearGradient id="paint2_linear_powerautomate" x1="37.5" y1="10" x2="37.5" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B90F5" />
        <stop offset="1" stopColor="#2A78EE" />
      </linearGradient>
      <clipPath id="clip0_powerautomate">
        <rect width="96" height="96" fill="white" />
      </clipPath>
      <clipPath id="clip1_powerautomate">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip0_powerautomate)">
      <g clipPath="url(#clip1_powerautomate)">
        <mask id="mask0_powerautomate" mask-type="alpha" maskUnits="userSpaceOnUse" x="-1" y="10" width="97" height="76">
          <path d="M61.2116 10C62.3496 10 63.4337 10.4847 64.1925 11.3328L94.6136 45.3328C95.9723 46.8514 95.9723 49.1486 94.6136 50.6672L64.1925 84.6672C63.4337 85.5153 62.3496 86 61.2116 86H3.94634C0.488777 86 -1.34012 81.9095 0.965366 79.3328L29 48L0.965366 16.6672C-1.34012 14.0905 0.488777 10 3.94634 10H61.2116Z" fill="white" />
        </mask>
        <g mask="url(#mask0_powerautomate)">
          <path d="M63 10L29 48L-5 10H63Z" />
          <g filter="url(#filter0_f_powerautomate)">
            <path d="M63 10.4L-5 86.4H63L97 48.4L63 10.4Z" fillOpacity="0.24" />
          </g>
          <g filter="url(#filter1_f_powerautomate)">
            <path d="M63 12L-5 88H63L97 50L63 12Z" fillOpacity="0.32" />
          </g>
          <path d="M-5 86L63 10L97 48L63 86H-5Z" />
          <path d="M-5 86L63 10L80 29L29 86H-5Z" />
        </g>
      </g>
    </g>
  </svg>
);

export default PowerAutomateLogo;