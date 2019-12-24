import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css";

const Header = ( { siteTitle } ) => {
	return (
		<header
			style={{
				background: `rebeccapurple`,
			}}
		>
			<div className="header__row">
				<h1>
					<Link
						to="/"
						style={{
							color: `white`,
							textDecoration: `none`,
						}}
					>
						{siteTitle}
					</Link>
				</h1>
				<div>
					<Link className="header__link" to="/about-us">O nas</Link>
					<Link className="header__link" to="/news-list">Novinky</Link>
					<Link className="header__link" to="/contact">Kontakt</Link>
				</div>
			</div>
		</header>
	)
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header
