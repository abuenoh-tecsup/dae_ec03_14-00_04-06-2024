import Header from "../components/Header";
import ItemSearch from "../components/ItemSearch";
import ItemList from "../components/ItemList";
import FavoritePanel from "../components/FavoritePanel";
import { useState, useEffect } from "react";
import { getItems } from "../data/items";
import { notifyFavorite } from "../utils/notifyFavorite";
import useDebounce from "../hooks/useDebouce";
import useLocalStorage from "../hooks/useLocalStorage";
import "react-toastify/dist/ReactToastify.css";

export default function Items() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useLocalStorage("fav-items", []);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setTimeout(() => {
      const data = getItems();
      setItems(data);
      setFilteredItems(data);
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [debouncedSearch, items]);

  const toggleFavorite = (item) => {
    const exists = favorites.find((fav) => fav.id === item.id);
    const updated = exists
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updated);

    notifyFavorite(exists ? "remove" : "add", item.title);
  };

  return (
    <>
      <Header position="sticky" />
      <main className="container">
        <h1 className="display-3 fw-bold text-center pb-3 text-netflix">Items</h1>
        <section className="pb-4">
          <ItemSearch value={search} onChange={setSearch} />
        </section>

        <section>
          <ItemList
            sectionTitle="Tendencias actuales"
            category="trending"
            items={filteredItems}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            buttonText="Ver ahora"
            onItemButtonClick={(item) => console.log("Acción", item)}
          />
          <ItemList
            sectionTitle="Populares"
            category="popular"
            items={filteredItems}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            buttonText="Ver ahora"
            onItemButtonClick={(item) => console.log("Acción", item)}
          />
          <ItemList
            sectionTitle="Netflix Originals"
            category={"netflixOriginals"}
            items={filteredItems}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            buttonText="Ver ahora"
            onItemButtonClick={(item) => console.log("Acción", item)}
          />
          <ItemList
            sectionTitle="Películas"
            category={"movies"}
            items={filteredItems}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            buttonText="Ver ahora"
            onItemButtonClick={(item) => console.log("Acción", item)}
          />
          <ItemList
            sectionTitle="Documentales"
            category={"documentaries"}
            items={filteredItems}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            buttonText="Ver ahora"
            onItemButtonClick={(item) => console.log("Acción", item)}
          />
          
          <button
            className="btn btn-warning  shadow-lg position-fixed bottom-0 end-0 m-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#favoritePanel"
            aria-controls="favoritePanel"
          >
            <h1>⭐</h1>
          </button>

          <FavoritePanel
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
      </main>
    </>
  );
}
