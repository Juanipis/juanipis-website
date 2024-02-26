import { Button, DropdownMenu, Flex } from "@radix-ui/themes";

import { ReactNode } from "react";
import { ThemeToggle } from "../theme-mode/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretDownIcon } from "@radix-ui/react-icons";

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
    <Flex align="center" wrap="wrap">
      <div className="hidden md:block">
        <NavigationButton href="/">Home</NavigationButton>
        <NavigationButton href="/about-me">About</NavigationButton>
        <NavigationButton href="/projects">Projects</NavigationButton>
        <NavigationButton href="/contact">Contact</NavigationButton>
      </div>
      <div className="md:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Menu
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <Link href="/">Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/about-me">About</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/projects">Projects</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/contact">Contact</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <ThemeToggle />
    </Flex>
  );
};

export default Navigation;
