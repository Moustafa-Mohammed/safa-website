function Button({ styles, children }) {
  return (
    <button className={`btn rounded text-light ${styles}`}>{children}</button>
  );
}

export default Button;
