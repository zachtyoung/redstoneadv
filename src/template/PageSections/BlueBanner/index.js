import React from "react"
import { graphql } from "gatsby"
import { Container, Inner, Quote, Author, Ellipsis, Compass } from "./styles"
import ellipsis from "../../../images/Ellipsis-blue.svg"
import compass from "../../../images/compass.svg"
const BlueBanner = ({ section: { elements } }) => {
	return (
		<Container>
			<Inner>
				<Ellipsis>
					<img src={ellipsis} />
				</Ellipsis>
				<Compass>
					<img src={compass} />
				</Compass>
				<Quote>{elements.quote.value}</Quote>
				<Author>{elements.attribution.value}</Author>
				<Ellipsis>
					<img src={ellipsis} />
				</Ellipsis>
			</Inner>
		</Container>
	)
}

export default BlueBanner

export const BlueBannerFragment = graphql`
	fragment BlueBannerFragment on kontent_item_blue_banner {
		id
		system {
			id
			type
			codename
		}
		elements {
			attribution {
				value
			}
			quote {
				value
			}
		}
	}
`
