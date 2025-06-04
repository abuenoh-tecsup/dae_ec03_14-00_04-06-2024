export default function FavoritePanel({ favorites = [], onToggleFavorite }) {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="favoritePanel"
      aria-labelledby="favoritePanelLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="favoritePanelLabel">⭐ Mis Favoritos</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
      </div>
      <div className="offcanvas-body">
        {favorites.length === 0 ? (
          <p className="text-muted">Aún no has añadido favoritos</p>
        ) : (
          favorites.map((item) => (
            <div key={item.id} className="mb-3 border-bottom pb-2">
              <h6>{item.title}</h6>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onToggleFavorite(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
