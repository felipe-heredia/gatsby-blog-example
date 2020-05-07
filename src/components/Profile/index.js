import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
			<S.ProfileLink>
				<S.ProfileAuthor>{title}</S.ProfileAuthor>
				<S.ProfileDescription>{description}</S.ProfileDescription>
			</S.ProfileLink>
		</S.ProfileWrapper>
	)
}

export default Profile
