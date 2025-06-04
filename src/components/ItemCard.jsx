export default function ItemCard({
  item,
  onButtonClick,
  buttonText,
  showFavoriteToggle = false,
  isFavorite = false,
  onToggleFavorite,
  descriptionLines = 2,
}) {
  const { image, title, description, extra } = item;

  const getClampClass = (lines) => `truncate-${lines}-lines`;

  return (
    <div className="card position-relative ">
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title || "Imagen del ítem"}
        />
      )}
      {showFavoriteToggle && (
        <button
          className="btn btn-sm position-absolute top-0 end-0 m-2"
          onClick={() => onToggleFavorite && onToggleFavorite(item)}
          style={{ fontSize: "1.5rem", color: isFavorite ? "gold" : "gray" }}
          aria-label={
            isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
        >
          {isFavorite ? "★" : "☆"}
        </button>
      )}

      <div className="card-body">
        {extra.creator && (
          <p className="card-text fs-6">
            {extra.creator}
          </p>
        )}
        {title && <h4 className={`card-title ${getClampClass(2)}`}>{title}</h4>}
        {description && (
          <p className={`card-text ${getClampClass(descriptionLines)}`}>
            {description}
          </p>
        )}
        
        <button
          className="btn btn-netflix"
          onClick={() => onButtonClick && onButtonClick(item)}
          type="button"
        >
          {buttonText || "Action"}
        </button>
      </div>
    </div>
  );
}
