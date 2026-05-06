function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>MP Tourism</h5>
            <p>Explore the heart of India with us.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/" className="text-light">Explore</a></li>
              <li><a href="/" className="text-light">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p>Email: info@mptourism.com</p>
          </div>

        </div>

        <div className="text-center mt-3">
          <p className="mb-0">© 2026 MP Tourism</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;