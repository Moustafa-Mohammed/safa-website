function CardItem({ description, subtitle, imgSrc, styles }) {
  return (
    <div className="row d-flex align-items-center text-end">
      <div className="col-2">
        <img className="w-100" src={imgSrc} alt="list icon" />
      </div>
      <div className="col-10">
        <span className={styles || "opacity-50"}>{subtitle}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardItem;
