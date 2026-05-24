import User from "./User";
import SearchBar from "../components/SearchBar";
export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top border-bottom"
      style={{
        background: "rgba(0, 57, 72, 0.75)", // your brand color with transparency
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-fluid px-3 px-lg-5">

        {/* Brand */}
        <a className="navbar-brand fw-semibold text-light" href="/">
          MP Tourism
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center">

            <li className="nav-item">
              <a className="nav-link text-light" href="/destination">
                Destinations
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="/plan">
                Plan Your Trip
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="/experiences">
                Experiences
              </a>
            </li>

          </ul>
            <SearchBar />
          

          {/* User Section */}
          <div className="d-flex align-items-center">
            <User />
          </div>

        </div>
      </div>
    </nav>
  );
}