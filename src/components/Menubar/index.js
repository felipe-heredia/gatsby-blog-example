import React, { useState, useEffect } from "react"

import * as S from "./styled"
import Icons from "./Icons"

import getThemeColor from "../../utils/getThemeColor"

const Menubar = () => {
	const [theme, setTheme] = useState(null)
	const [display, setDisplay] = useState(null)

	const isDarkMode = theme === "dark"
	const isListMode = display === "list"

	useEffect(() => {
		setTheme(window.__theme)
		setDisplay(window.__display)

		window.__onThemeChange = () => setTheme(window.__theme)
		window.__onDisplayChange = () => setDisplay(window.__display)
	}, [])

	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink
					to="/"
					title="Voltar para a Home"
					cover
					direction="right"
					bg={getThemeColor()}
					duration={0.6}
				>
					<S.MenuBarItem>
						<Icons.Home />
					</S.MenuBarItem>
				</S.MenuBarLink>
				<S.MenuBarLink
					to="/search/"
					title="Pesquisar"
					cover
					direction="right"
					bg={getThemeColor()}
					duration={0.6}
				>
					<S.MenuBarItem>
						<Icons.Search />
					</S.MenuBarItem>
				</S.MenuBarLink>
			</S.MenuBarGroup>
			<S.MenuBarGroup>
				<S.MenuBarItem
					title="Mudar o tema"
					onClick={() => {
						window.__setPreferredTheme(isDarkMode ? "light" : "dark")
					}}
					className={theme}
				>
					<Icons.Light />
				</S.MenuBarItem>
				<S.MenuBarItem
					title="Mudar visualização"
					onClick={() => {
						window.__setPreferredDisplay(isListMode ? "grid" : "list")
					}}
					className="display"
				>
					{isListMode ? <Icons.Grid /> : <Icons.List />}
				</S.MenuBarItem>
				<S.MenuBarItem title="Ir para o topo">
					<Icons.Arrow />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	)
}

export default Menubar
