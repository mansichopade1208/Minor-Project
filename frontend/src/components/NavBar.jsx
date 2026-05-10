export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MP Tourism
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/destination">
              Desitinations
            </a>
            <a className="nav-link" href="/plan">
              Plan Your Trip
            </a>
            <a className="nav-link" href="/experience">
              Experiences
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
