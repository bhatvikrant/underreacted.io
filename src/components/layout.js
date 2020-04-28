import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `2.625rem ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>

      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://mobile.twitter.com/vikrantbhat1022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        &bull;{" "}
        <a
          href="https://github.com/bhatvikrant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://www.linkedin.com/in/vikrant-bhat-2b6221189/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked In
        </a>
      </footer>
    </div>
  )
}

export default Layout
