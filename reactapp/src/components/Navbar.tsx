import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack>
      <Link to="/">
          Home
      </Link>
      <Link to="/about">
          About
      </Link>
    </HStack>
  );
}
  