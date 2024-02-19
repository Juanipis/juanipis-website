import { Card, Flex, Heading } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./styles.module.css";
import juanipis_avatar from "../../../public/avatar_juanipis.jpg";
import Navigation from "./navigation/navigation";

const Navbar = () => {
  return (
    <Card variant="surface" mt="3" mr="2" ml="2">
      <Flex justify="between" ml="5" mr="5" mt="3" align="center" mb="3">
        <Heading size="6">Juanipis</Heading>
        <Navigation />
        <Avatar.Root className={styles.AvatarRoot}>
          <Avatar.Image
            className={styles.AvatarImage}
            src={juanipis_avatar.src}
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
