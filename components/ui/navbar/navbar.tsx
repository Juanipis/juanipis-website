import { Card, Flex, Heading } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./styles.module.css";
import juanipis_avatar from "../../../public/avatar_juanipis.jpg";
import juanipis_avatar_dark from "../../../public/avatar_juanipis_dark.jpg";
import Navigation from "./navigation/navigation";
import { useCssLibPreference } from "../../CssLibPreference";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const { accentColor } = useCssLibPreference();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.navbarWrapper}
    >
      <Card variant="surface" mt="3" mr="2" ml="2" className={styles.navbarCard}>
        <Flex
          justify="between"
          align="center"
          wrap="nowrap"
          className={styles.navbarContainer}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.logoSection}
          >
            <Link href="/" className={styles.logoLink}>
              <Flex align="center" gap="2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
                  whileHover={{ scale: 1.1 }}
                  className={styles.avatarContainer}
                >
                  <Avatar.Root className={styles.AvatarRoot}>
                    <Avatar.Image
                      className={styles.AvatarImage}
                      src={
                        accentColor === "crimson"
                          ? juanipis_avatar_dark.src
                          : juanipis_avatar.src
                      }
                      alt="Juanipis avatar"
                    />
                    <Avatar.Fallback className={styles.AvatarFallback} delayMs={600}>
                      JP
                    </Avatar.Fallback>
                  </Avatar.Root>
                </motion.div>
                <Heading size={{ initial: '5', md: '6' }} className={styles.siteHeading}>Juanipis</Heading>
              </Flex>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.navigationSection}
          >
            <Navigation />
          </motion.div>
        </Flex>
      </Card>
    </motion.div>
  );
};

export default Navbar;
