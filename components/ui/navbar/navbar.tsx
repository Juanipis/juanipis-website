import { Card, Flex, Heading } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./styles.module.css";
import juanipis_avatar from "../../../public/avatar_juanipis.jpg";
import juanipis_avatar_dark from "../../../public/avatar__juanipis_dark.jpg";
import Navigation from "./navigation/navigation";
import { useCssLibPreference } from "../../CssLibPreference";

const Navbar = () => {
  const { accentColor } = useCssLibPreference();

  return (
    <Card variant="surface" mt="3" mr="2" ml="2">
      <Flex justify="between" ml="5" mr="5" mt="3" align="center" mb="3">
        <Heading size="6">Juanipis</Heading>
        <Navigation />
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
      </Flex>
    </Card>
  );
};

export default Navbar;
