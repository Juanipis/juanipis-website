import React from "react";

const PostgreSQLLogo: React.FC<SvgProps> = ({
  fill = "#000000",
  width = "800px",
  height = "800px",
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Postgresql logo</title>
  </svg>
);

export default PostgreSQLLogo;
