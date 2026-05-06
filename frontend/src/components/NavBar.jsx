export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary  border-bottom sticky-top" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MP Tourism
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">
              Desitinations
            </a>
            <a class="nav-link" href="#">
              Plan Your Trip
            </a>
            <a class="nav-link" href="#">
              Experiences
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
