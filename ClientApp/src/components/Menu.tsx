import { Navbar, NavLink } from '@mantine/core'
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

export function Menu(){
  const location = useLocation();

    return (
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        <Navbar.Section>{/* Header with logo */}</Navbar.Section>
        <Navbar.Section grow mt="md">
          <NavLink
            label="Home"
            component={Link}
            to="/"
            active={location.pathname == "/home"}
          />
          <NavLink
            label="About"
            component={Link}
            to="/about"
            active={location.pathname == "/about"}
          />
        </Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
    );
}