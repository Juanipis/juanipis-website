import { useCssLibPreference } from "../../../CssLibPreference";

interface LinkLogoProps {
  href: string;
  width: string;
  height: string;
  logo: React.FC<SvgProps>;
}

const logoDarkColor = "#B0436E";
const logoLightColor = "#004074";

const LinkLogo: React.FC<LinkLogoProps> = ({
  href,
  width,
  height,
  logo: Logo,
}) => {
  const { accentColor } = useCssLibPreference();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Logo
        fill={accentColor === "crimson" ? logoDarkColor : logoLightColor}
        width={width}
        height={height}
      />
    </a>
  );
};

export default LinkLogo;
