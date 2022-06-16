function NavLink({ children }) {
  return (
    <li className="nav-item">
      <a className="nav-link active-text-primary" aria-current="page" href="#">
        {children}
      </a>
    </li>
  );
}

export default NavLink;
