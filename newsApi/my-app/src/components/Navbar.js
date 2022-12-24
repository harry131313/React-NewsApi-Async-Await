

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li>
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        {/* <li><a class="nav-link disabled">Disabled</a></li> */}
        {/* <li><a class="nav-link" href= "">business</a></li>
        <li><a class="nav-link" href= "">entertainment</a></li> */}
        {/* <li><a class="nav-link" href= "health">health</a></li> */}
        <li><Link class="nav-link" to= "general">general</Link></li>
        <li><Link class="nav-link" to= "science">science</Link></li>

        
        <li><Link class="nav-link" to= "sports">sports</Link></li>
        <li><Link class="nav-link" to= "technology">technology</Link></li>
      </ul>

    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar