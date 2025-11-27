import React from "react"
import { graphql } from "gatsby"
import HomeHero from "./HomeHero"
import ImageAndText from "./ImageAndText"
import BlueBanner from "./BlueBanner"
import GoldBanner from "./GoldBanner"
import WhoHero from "./WhoHero"
import BioList from "./BioList"
import SingleColumnBanner from "./SingleColumnBanner"
import ContactForm from "./ContactForm"
import WhyHero from "./WhyHero"
import WhatHero from "./WhatHero"
import TabNav from "./Tabs"
import GrayBanner from "./GrayBanner"
import BodyCopy from "./BodyCopy"
import Media from "./Media"
import SingleImageDoubleText from "./SingleImageDoubleText"
import WhyBanner from "./WhyBanner"
import ContactHero from "./ContactHero"
import TwoColumnSection from "./TwoColumnSection"
const PageSections = ({ section, location }) => {
	switch (section?.system?.type) {
		case "section___home_hero": {
			return <HomeHero section={section} />
		}
		case "section___image_and_text": {
			return <ImageAndText section={section} location={location} />
		}
		case "blue_banner": {
			return <BlueBanner section={section} />
		}
		case "gold_banner": {
			return <GoldBanner section={section} />
		}
		case "section___who_we_are_hero": {
			return <WhoHero section={section} />
		}
		case "section___bio_list": {
			return <BioList section={section} />
		}
		case "single_column_banner": {
			return <SingleColumnBanner section={section} />
		}
		case "contact_form": {
			return <ContactForm section={section} />
		}
		case "why_us_hero": {
			return <WhyHero section={section} />
		}
		case "what_we_do_hero": {
			return <WhatHero section={section} />
		}
		case "tabs": {
			return <TabNav section={section} />
		}
		case "gray_banner": {
			return <GrayBanner section={section} />
		}
		case "section___body_copy": {
			return <BodyCopy section={section} />
		}
		case "section___media": {
			return <Media section={section} />
		}
		case "single_image_double_text": {
			return <SingleImageDoubleText section={section} />
		}
		case "why_us_banner": {
			return <WhyBanner section={section} />
		}
		case "contact_hero": {
			return <ContactHero section={section} />
		}
		case "two_column_section": {
			return <TwoColumnSection section={section} />
		}
		default:
			return null
	}
}

export default PageSections

export const PageSectionFragment = graphql`
	fragment PageSectionFragment on Node {
		id
		... on kontent_item_section___home_hero {
			...HomeHeroFragment
		}
		... on kontent_item_section___image_and_text {
			...ImageAndTextFragment
		}
		... on kontent_item_blue_banner {
			...BlueBannerFragment
		}
		... on kontent_item_gold_banner {
			...GoldBannerFragment
		}
		... on kontent_item_section___who_we_are_hero {
			...WhoHeroFragment
		}
		... on kontent_item_section___bio_list {
			...BioListFragment
		}
		... on kontent_item_single_column_banner {
			...SingleColumnBannerFragment
		}
		... on kontent_item_contact_form {
			...ContactFormFragment
		}
		... on kontent_item_why_us_hero {
			...WhyHeroFragment
		}
		... on kontent_item_what_we_do_hero {
			...WhatHeroFragment
		}
		... on kontent_item_tabs {
			...TabsFragment
		}
		... on kontent_item_gray_banner {
			...GrayBannerFragment
		}
		... on kontent_item_section___body_copy {
			...BodyCopyFragment
		}
		... on kontent_item_section___media {
			...MediaFragment
		}
		... on kontent_item_single_image_double_text {
			...SingleImageDoubleTextFragment
		}
		... on kontent_item_why_us_banner {
			...WhyBannerFragment
		}
		... on kontent_item_contact_hero {
			...ContactHeroFragment
		}
		... on kontent_item_two_column_section {
			...TwoColumnSectionFragment
		}
	}
`
