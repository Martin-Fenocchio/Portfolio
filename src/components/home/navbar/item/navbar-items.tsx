interface Props {
  text: string;
  sectionID: string;
}

function NavbarItems(props: Props) {
  return (
    <a href={props.sectionID}>
      <div className="navbar-item hover ">{props.text}</div>
    </a>
  );
}

export default NavbarItems;
