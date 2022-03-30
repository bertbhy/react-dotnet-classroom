//Home.tsx
import { Heading, Box } from "@chakra-ui/react";
import MyName from "../components/MyName";
export default function Home() {
  return (
    <Box>
      <Heading>I'm a Home page</Heading>
      <MyName />
    </Box>
  );
}
