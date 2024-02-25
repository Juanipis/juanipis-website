import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { styled } from "@stitches/react";

const ExperienceLine = styled("div", {
  position: "relative",
  marginLeft: "20px",
  "&:before": {
    content: "",
    position: "absolute",
    left: "-20px",
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "currentColor",
  },
});

const ExperienceMarker = styled("div", {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "currentColor",
  position: "absolute",
  left: "-26px",
  top: "5%", // Ajusta para centrar sobre la línea
  transform: "translateY(-50%)", // Ajusta para centrar sobre la línea
});

const ExperienceItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <ExperienceMarker />
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Tooltip content
        </TooltipContent>
      </Tooltip>
      <div style={{ marginLeft: "30px" }}>{children}</div>
    </div>
  );
};

export { ExperienceLine, ExperienceItem };
