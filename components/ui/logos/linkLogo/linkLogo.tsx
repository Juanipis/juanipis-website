import { useCssLibPreference } from "../../../CssLibPreference";
import { logoDarkColor, logoLightColor } from "../../colors/logoColors";

interface LinkLogoProps {
  href: string;
  width: string;
  height: string;
  logo: React.FC<SvgProps>;
  paddingBottom?: string; // Add this line
}

const LinkLogo: React.FC<LinkLogoProps> = ({
  href,
  width,
  height,
  logo: Logo,
  paddingBottom, // Add this line
}) => {
  const { accentColor } = useCssLibPreference();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ paddingBottom }} // Add this line
    >
      <Logo
        fill={accentColor === "crimson" ? logoDarkColor : logoLightColor}
        width={width}
        height={height}
      />
    </a>
  );
};

export default LinkLogo;
