import React from "react";

// import { Container } from './styles';

type MenuLinkOption = {
  labek: string;
  url: string;
};

type MenuButtonOtion = {
  label: string;
  onClick: () => any;
};

type Props = {
  options: MenuLinkOption | MenuButtonOtion;
};

const NavBar: React.FC<Props> = ({ options }) => {
  return <div />;
};

export default NavBar;
