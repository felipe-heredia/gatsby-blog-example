import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

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
		<S.ProfileWrapper>
			<S.ProfileLink
				to="/"
				cover
				direction="left"
				bg={getThemeColor()}
				duration={0.6}
			>
				<S.ProfileAuthor>{title}</S.ProfileAuthor>
				<S.ProfileDescription>{description}</S.ProfileDescription>
			</S.ProfileLink>
		</S.ProfileWrapper>
	)
}

export default Profile
