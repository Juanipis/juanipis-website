import { Button, Flex } from "@radix-ui/themes";

import { ReactNode } from "react";
import { ThemeToggle } from "../theme-mode/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationButtonProps {
  children: ReactNode;
  href: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const variant = router.pathname === href ? "soft" : "surface";

  return (
    <Link href={href}>
      <Button mr="1" ml="1" variant={variant}>
        {children}
      </Button>
    </Link>
  );
};

const Navigation = () => {
  return (
    <Flex align="center">
      <NavigationButton href="/">Home</NavigationButton>
      <NavigationButton href="/about-me">About me</NavigationButton>
      <NavigationButton href="/projects">Projects</NavigationButton>
      <NavigationButton href="/contact">Contact</NavigationButton>
      <ThemeToggle />
    </Flex>
  );
};

export default Navigation;
