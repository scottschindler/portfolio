import React from "react"
import { Link } from "gatsby"
import "../pages/index.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <div class="nav-links">
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default Header
