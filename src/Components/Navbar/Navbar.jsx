import React from 'react'
//how to include a CSS file in a React component
function Navbar() {
  return (
    

<nav className="navbar navbar-expand-lg bg">
  <div className="container">
    <a className="navbar-brand" href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar