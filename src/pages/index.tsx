import { Inter } from "next/font/google";
import { Button, Heading, Text } from "@radix-ui/themes";

import { BookmarkIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Heading as="h1">Next.js + Radix-UI + Next-themes</Heading>
      <Text>This is a radix</Text>
      <Button>
        <BookmarkIcon width="16" height="16" /> Bookmark
      </Button>
    </div>
  );
}
