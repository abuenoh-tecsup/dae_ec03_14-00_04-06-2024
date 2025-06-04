import { useRef } from "react";
import ItemCard from "./ItemCard";
import LoadingSkeleton from "./LoadingSkeleton";

export default function ItemList({
  sectionTitle = "Titulo",
  items = [],
  category = null,
  onItemButtonClick,
  buttonText,
  loading,
  showFavoriteToggle = true,
  favorites = [],
  onToggleFavorite,
}) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) return <LoadingSkeleton count={8} />;

  const filteredItems = category
    ? items.filter((item) => item.extra?.category === category)
    : items;

  return (
    <div className="relative pb-5">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
      >
        ▶
      </button>

      <h2 className="d-inline-block ps-4">{sectionTitle}</h2>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar px-3 py-2"
      >
        <div className="d-flex flex-nowrap gap-3">
          {filteredItems.map((item) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{
                  width: "90vw",
                  maxWidth: "250px",
                }}
              >
                <ItemCard
                  item={item}
                  onButtonClick={onItemButtonClick}
                  buttonText={buttonText}
                  showFavoriteToggle={showFavoriteToggle}
                  isFavorite={isFavorite}
                  onToggleFavorite={onToggleFavorite}
                  descriptionLines={3}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
