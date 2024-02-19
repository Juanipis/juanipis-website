import { Button, Flex } from "@radix-ui/themes";

import { ReactNode } from "react";
import { ThemeToggle } from "../theme-mode/ThemeToggle";

const NavigationButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button mr="1" ml="1" variant="surface">
      {children}
    </Button>
  );
};

const Navigation = () => {
  return (
    <Flex align="center">
      <NavigationButton>Home</NavigationButton>
      <NavigationButton>Projects</NavigationButton>
      <NavigationButton>Contact</NavigationButton>
      <ThemeToggle />
    </Flex>
  );
};

export default Navigation;
