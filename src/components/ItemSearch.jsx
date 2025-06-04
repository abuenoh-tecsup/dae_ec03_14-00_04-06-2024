export default function ItemSearch({ value, onChange }) {
  return (
    <input
      className="form-control me-2"
      type="Buscar"
      placeholder="Buscar"
      aria-label="Buscar"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
