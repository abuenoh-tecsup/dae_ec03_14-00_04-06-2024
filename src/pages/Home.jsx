import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/ItemSearch";
import HeroBanner from "../components/HeroBanner";
import CardList from "../components/CardList";
import { getItems } from "../data/items";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = getItems();
      setItems(data);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Header position="fixed"></Header>
      <main>
        <HeroBanner
          title="Tu mundo de entretenimiento, sin límites"
          lead="Disfruta de películas, series y documentales originales y exclusivos. Netflix te ofrece entretenimiento sin límites, adaptado a tus gustos y disponible en todos tus dispositivos."
          itemsLabel = "Explora el catálogo"
          contactLabel = "Contáctanos"
          images={[
            "https://images.ctfassets.net/4cd45et68cgf/66cMtNBoCUrvKMMZof9hgz/bba75b137bbde51478d255d8cd1c4aaf/wednesdayseason2partners.png?w=1200",
            "https://images.ctfassets.net/4cd45et68cgf/17Wb2C13sSjNXLvEw7u9mH/050398ba024ed2b13ac0217319504022/STS_Ad_Bumper.png",
            "https://www.smarthouse.com.au/wp-content/uploads/2022/11/netflix-compressor.png"
          ]}
        />
        <section className="container py-4">
          <CardList items={items} loading={loading} buttonText={"Ver más"} />
        </section>
      </main>
    </>
  );
}
