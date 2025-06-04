import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { ReactNode, useState } from "react";
import { ThemeToggle } from "../theme-mode/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

interface NavigationButtonProps {
  children: ReactNode;
  href: string;
  active?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  href,
  active,
}) => {
  const router = useRouter();
  const isActive = active !== undefined ? active : router.pathname === href;
  const variant = isActive ? "soft" : "surface";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={styles.navButton}
    >
      <Link href={href} className={styles.navLink}>
        <Button
          mr="1"
          ml="1"
          variant={variant}
          className={
            isActive ? styles.activeButton : ""
          }
        >
          {children}
        </Button>
      </Link>
    </motion.div>
  );
};

const MobileNavItem: React.FC<NavigationButtonProps> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <DropdownMenu.Item
      className={`${styles.dropdownItem} ${
        isActive ? styles.activeItem : ""
      }`}
    >
      <Link href={href} className={styles.mobileNavLink}>
        {children}
      </Link>
    </DropdownMenu.Item>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      wrap="wrap"
      className={styles.navigationContainer}
    >
      <div className={styles.desktopNav}>
        <NavigationButton href="/">Home</NavigationButton>
        <NavigationButton href="/about-me">About</NavigationButton>
        <NavigationButton href="/projects">Projects</NavigationButton>
        <NavigationButton href="/contact">Contact</NavigationButton>
      </div>
      <div className={styles.mobileNav}>
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger>
            <Button variant="soft" className={styles.menuButton}>
              <HamburgerMenuIcon className={styles.hamburgerIcon} />
              <span className="ml-1">Menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <AnimatePresence>
            {isOpen && (
              <DropdownMenu.Content
                className={styles.dropdownContent}
                sideOffset={5}
                forceMount
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MobileNavItem href="/">Home</MobileNavItem>
                  <MobileNavItem href="/about-me">About</MobileNavItem>
                  <MobileNavItem href="/projects">Projects</MobileNavItem>
                  <MobileNavItem href="/contact">Contact</MobileNavItem>
                </motion.div>
              </DropdownMenu.Content>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </div>
      <ThemeToggle />
    </Flex>
  );
};

export default Navigation;
