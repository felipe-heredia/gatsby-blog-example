import React, { useState, useEffect } from "react"

import * as S from "./styled"
import Icons from "./Icons"

const Menubar = () => {
	const [theme, setTheme] = useState(null)

	const isDarkMode = theme === "dark"

	useEffect(() => {
		setTheme(window.__theme)
		window.__onThemeChange = () => setTheme(window.__theme)
	}, [])

	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink to="/" title="Voltar para a Home">
					<S.MenuBarItem>
						<Icons.Home />
					</S.MenuBarItem>
				</S.MenuBarLink>
				<S.MenuBarLink to="/search/" title="Pesquisar">
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
				<S.MenuBarItem title="Mudar visualização">
					<Icons.Grid />
				</S.MenuBarItem>
				<S.MenuBarItem title="Ir para o topo">
					<Icons.Arrow />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	)
}

export default Menubar
