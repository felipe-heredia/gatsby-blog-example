import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<PostItem
			slug="/about"
			background="red"
			category="JS"
			date="30 de Março de 2019"
			timeToRead="14"
			title="Diga não ao CSS: Utilize StyledComponents"
			description="Aprendendo a utilizar o StyledComponents, vamos deixar de usar o CSS padrão, vamos para algo mais avançado"
		/>
	</Layout>
)

export default IndexPage
