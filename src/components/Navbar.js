import React from "react"

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <a className="logo" href="/">
          CYBE
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>

            <li className="btn">
              <a href="/">Opensea</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
