function SearchBar() {

  return (

    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-lg-6 col-md-8">

          <div className="input-group shadow-sm rounded-pill overflow-hidden">

            {/* Search Icon */}

            <span className="input-group-text bg-white border-0 px-4">

              <i className="fa-solid fa-magnifying-glass text-muted"></i>

            </span>

            {/* Input */}

            <input
              type="text"
              className="form-control border-0 py-3"
              placeholder="Search destinations, culture, temples..."
            />

          </div>

        </div>

      </div>

    </div>

  );

}

export default SearchBar;