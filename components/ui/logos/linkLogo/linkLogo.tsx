import { useCssLibPreference } from "../../../CssLibPreference";
import { logoDarkColor, logoLightColor } from "../../colors/logoColors";

interface LinkLogoProps {
  href: string;
  width: string;
  height: string;
  logo: React.FC<SvgProps>;
}

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
