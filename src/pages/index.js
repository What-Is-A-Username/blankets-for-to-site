import React, {useState} from 'react'
import Img from 'gatsby-image'

import { Link } from 'gatsby'
import StyledButton from '../components/styled-button'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import StatsHighlight from '../components/home/stats-highlight'
import styles from '../page-styles/index.module.css'
import SEO from '../components/SEO'
import ContactBox from '../components/home/contact-box'
import Sponsors from '../components/home/sponsors'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import ScreenContainer from '../components/screen-container'
import OrganizationMap from '../components/home/org-map'

class RootIndex extends React.Component {

	render() {
		const allContentfulOrganizationInformation = get(this, 'props.data.allContentfulOrganizationInformation.nodes')
		const organizationBlurb = allContentfulOrganizationInformation[0];
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Home' description='Blankets for T.O. is a non-profit organization at the University of Toronto providing support to those in need and combatting stigma surrounding homelessness.' useMailChimp useCurator/>
				<div className="white-background">
					{/* Background Image or Video */}
					<Fade>
						<div className={styles.title}>
							<Img className={styles.backgroundImage} fluid={organizationBlurb.frontPageImage.fluid} alt='Homepage image for Blankets for T.O.'/>			
						</div>
					</Fade>
					{/* About Us description */}
					<ScreenContainer>
						<Bounce left>
						<div className={styles.description}>
							<h2>Our Organization</h2>
							<p>{organizationBlurb.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb}</p>
							<div className={styles.btnRow}>
								<StyledButton link='/about' buttonText='Read more' isWhite/>
								<StyledButton link='/team' buttonText='Meet the team' isWhite/>
							</div>
						</div>
						</Bounce>
					</ScreenContainer>

					{/* Donation counter */}
					<ScreenContainer>
						<StatsHighlight donationItemCount={organizationBlurb.donationItemCount}/>
					</ScreenContainer>

					<OrganizationMap/> 
					{/* Updates */}
					<ScreenContainer>
						<Fade>
							<ArticlePreview/>
						</Fade>
					</ScreenContainer>
						
					{/* Join Us and Contact Us Box */}
					<ScreenContainer>
						<Bounce right>
							<ContactBox left={organizationBlurb.leftBackgroundImage.fluid} right={organizationBlurb.leftBackgroundImage.fluid}></ContactBox>
						</Bounce>
					</ScreenContainer>

					<Bounce left>
						<Sponsors/>
					</Bounce>

					{/* Instagram Feed */}
					<div className={styles.instagram}>
						<Bounce top>
							<h2 className={styles.instagramTitle}>Keep updated with our feed</h2>
						</Bounce>
						<Fade delay={250}>
						<div className={styles.instagramPosts}>
							<div id="curator-feed-default-feed-layout">
								<a href="https://curator.io" target="_blank" class="crt-logo crt-tag" className="crt-logo crt-tag">
									Powered by Curator.io
								</a>
							</div>
						</div>
						</Fade>
						<Fade delay={300}>
							<div className={styles.btnRow}>	
								<StyledButton link={organizationBlurb.instagramLink} buttonText='Visit us on Instagram' openInNewTab/>
								<StyledButton link={organizationBlurb.twitterLink} buttonText='Visit us on Twitter' openInNewTab/>
							</div>
						</Fade>
					</div>
				</div>
			</Layout>
			)
		}
	}
	
	export default RootIndex
	
	export const pageQuery = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulHomeSlide { 
			edges {
				node {
					title
					childContentfulHomeSlideDescriptionRichTextNode {
						json
					}
					buttonText
					buttonLink
					backgroundImage {
						fluid(
							maxWidth: 2000
							resizingBehavior: FILL
							background: "rgb:000000"
							) {
								...GatsbyContentfulFluid_tracedSVG
							}
					}
				}
			}
		}
		allContentfulOrganizationInformation {
			nodes {
				childContentfulOrganizationInformationOrganizationFrontBlurbTextNode {
					organizationFrontBlurb
				}

				donationItemCount : donationItemCounter
				instagramLink
				twitterLink
				
				frontPageImage {
					fluid(
						maxHeight: 1920
						resizingBehavior: PAD
						background: "rgb:000000"
						) {
							...GatsbyContentfulFluid_tracedSVG
						}
					
				}

				leftBackgroundImage {
					fluid(
						maxHeight: 1000
						resizingBehavior: PAD
						background: "rgb:000000"
						) {
							...GatsbyContentfulFluid_tracedSVG
						}
				}
			}
		}
	}
`
