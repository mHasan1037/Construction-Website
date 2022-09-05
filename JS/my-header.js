class myHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar container-fluid navbar-expand-lg navbar-light fixed-top">
            <div class="container">
              <a class="navbar-brand text-white" href="#">UpConstruction</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item mx-2">
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="services.html">Services</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="projects.html">Projects</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="blogs.html">Blog</a>
                  </li>
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Dropdown 1</a></li>
                      <li class="dropdown" id="dropdown-link"><a class="dropdown-item dropdown-toggle" href="#" id="navbarSubDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Deep Dropdown</a>
                        <ul class="dropdown-menu dropDown-sub"  aria-labelledby="navbarSubDropdown">
                            <li><a class="dropdown-item" href="#">Dropdown 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown 3</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown 4</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown 5</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="#">Dropdown 3</a></li>
                      <li><a class="dropdown-item" href="#">Dropdown 4</a></li>
                      <li><a class="dropdown-item" href="#">Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>`
    }
}

customElements.define('my-header', myHeader)





