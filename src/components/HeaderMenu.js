import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const location = useLocation().pathname;
  let wWidth = window.innerWidth;

  return (
    <>
      {wWidth < 768 ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<FaArrowDown />}>
            Menu
          </MenuButton>
          <MenuList>
            <Link to="/" style={location === "/" ? { color: "#F687B3" } : null}>
              <MenuItem>Home</MenuItem>
            </Link>
            <MenuDivider />
            {[...Array.from({ length: 5 }, (_, i) => i + 1)].map((m) => (
              <>
                <Link
                  to={`task${m}`}
                  style={location === `/task${m}` ? { color: "#F687B3" } : null}
                >
                  <MenuItem key={m}>{`Task ${m}`}</MenuItem>
                </Link>
                <MenuDivider />
              </>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Stack spacing={4} direction="row" align="center">
          <Link
            to="/"
            style={location === "/" ? { color: "#F687B3" } : null}
            className="menu"
          >
            <Button colorScheme={location === "/" ? "pink" : null}>Home</Button>
          </Link>
          {[...Array.from({ length: 5 }, (_, i) => i + 1)].map((m) => (
            <Link to={`task${m}`} key={m} className="menu">
              <Button colorScheme={location === `/task${m}` ? "pink" : null}>
                {`Task ${m}`}
              </Button>
            </Link>
          ))}
        </Stack>
      )}
    </>
  );
};

export default HeaderMenu;
