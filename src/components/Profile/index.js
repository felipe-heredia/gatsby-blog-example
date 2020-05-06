import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, description },
		},
	} = useStaticQuery(graphql`
		query MySiteMetadata {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`)

	return (
		<div className="Profile-wrapper">
			<h1>{title}</h1>
			<h2>{description}</h2>
		</div>
	)
}

export default Profile
