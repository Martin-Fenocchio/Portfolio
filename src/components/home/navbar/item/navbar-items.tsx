interface Props {
  text: string;
}

function NavbarItems(props: Props) {
  return <div className="navbar-item hover ">{props.text}</div>;
}

export default NavbarItems;
