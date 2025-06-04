// ItemSearch.jsx
export default function ItemSearch({ value, onChange }) {
  return (
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
