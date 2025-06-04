import { Link } from "react-router-dom";

export default function Header({ children, position = "static" }) {
  const positionClass =
    {
      fixed: "fixed-top",
      sticky: "sticky-top",
      static: "",
    }[position] || "";

  return (
    <header
      className={`container-fluid mb-3 header-container ${positionClass}`}
    >
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Logo"
              height="24"
              className="d-inline-block align-text-top header-logo me-5"
            ></img>
            <h2 className="d-inline-block fw-bold text-spotify"></h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav me-auto">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
              <Link className="nav-link fw-bold" to="/items">
                Items
              </Link>
              <Link className="nav-link fw-bold" to="/contact">
                Contact
              </Link>
            </div>
            {children && <div className="d-flex">{children}</div>}
          </div>
        </div>
      </nav>
    </header>
  );
}
