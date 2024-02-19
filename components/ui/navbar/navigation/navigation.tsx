import { Button, Flex } from "@radix-ui/themes";

import { ReactNode } from "react";

const NavigationButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button mr="1" ml="1" variant="surface">
      {children}
    </Button>
  );
};

const Navigation = () => {
  return (
    <Flex>
      <NavigationButton>Home</NavigationButton>
      <NavigationButton>Projects</NavigationButton>
      <NavigationButton>Contact</NavigationButton>
    </Flex>
  );
};

export default Navigation;
