import ItemCard from "./ItemCard";
import LoadingSkeleton from "./LoadingSkeleton";

export default function CardList({
  items = [],
  onItemButtonClick,
  buttonText,
  loading,
}) {
  if (loading) return <LoadingSkeleton count={6} />;

  return (
    <div className="row">
      {items.slice(0,6).map((item, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
        
          <ItemCard
            item={item}
            onButtonClick={onItemButtonClick}
            buttonText={buttonText}
            descriptionLines={2}
          />
        </div>
      ))}
    </div>
  );
}
