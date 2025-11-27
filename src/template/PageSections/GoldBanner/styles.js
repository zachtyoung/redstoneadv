import styled from "styled-components"
import { Link } from "gatsby"
export const Container = styled.section`
	background-color: #e0e0e0;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	/* border-bottom: 64px solid #a08c6b; */

	align-items: center;
	@media screen and (max-width: 800px) {
		padding: 80px 40px 50px 40px;
		grid-template-columns: 1fr;
		padding-top: 40px;
		padding-bottom: 10px;
	}
	@media screen and (min-width: 800px) {
		padding: 30px 40px 20px 40px;
	}
`
export const Background = styled.img`
	position: absolute;
	height: 100%;
	right: 0;
	opacity: 0.1;
`
export const Border = styled.div`
	height: 64px;
	width: 100%;
	background-color: #c7ae86;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: #827154;
	}
	span {
		color: white;
		text-transform: uppercase;
		font-family: "PT Serif", serif;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`
export const Left = styled.div`
	padding-left: 100px;
	@media screen and (min-width: 800px) {
		img {
			width: 60px;
		}
	}
	@media screen and (max-width: 800px) {
		padding: 0px;
		margin: 0 auto;
		img {
			width: 50px;
		}
	}
`
export const Center = styled.div`
	margin: 0 auto;
	display: flex;
	@media screen and (max-width: 1330px) {
		display: block;
		padding: 30px 0;
		text-align: center;
	}
	p {
		height: max-content;
		width: max-content;
		margin-left: auto;
		margin-right: auto;
		color: #555555;
		font-size: 26px;
		margin-bottom: 0;

		@media screen and (max-width: 800px) {
			font-size: 22px;
			margin-bottom: 15px;
		}
		font-family: "PT Serif", serif;
		line-height: 20px;
		/* text-shadow: 0px 1px rgba(0, 0, 0, 0.2); */

		display: flex;
		align-items: center;
		@media screen and (max-width: 1330px) {
			font-weight: 600;
			margin-bottom: 15px;
			/* margin-left: 1rem; */
			opacity: 1;
			font-size: 19px;
			opacity: 0.95;
			&:first-of-type {
				font-weight: 600;
				opacity: 1;
				font-size: 16px;
				opacity: 0.9;
			}
			&:last-of-type {
				opacity: 1;
				font-size: 24px;
			}
		}
	}
`
export const Right = styled.div`
	position: relative;
	width: 100%;
	&:before {
		content: "";
		background: #7c6b50;
		position: absolute;
		top: 0;
		left: -50px;
		height: 100%;
		width: 3px;
	}
`

export const PageLink = styled(Link)`
	font-family: "PT Serif", serif;
	display: block;
	text-align: center;
	background: none;
	border: none;
	color: #fff;
	font-size: 18px;
	letter-spacing: 1px;
	max-width: 100%;
	font-weight: 400;
	/* background-color: #5a5a5a; */
	width: max-content;
	margin: 0 auto;
	/* border-radius: 100px;
  padding: 10px 20px; */
	text-transform: uppercase;
	text-decoration: underline;
	text-underline-offset: 8px;
	text-decoration-color: #7c6b50;
	cursor: pointer;
	&:hover {
		color: #7c6b50;
		text-decoration-color: #fff;
	}
`

export const Delimiter = styled.div`
	@media screen and (max-width: 1330px) {
		display: none;
	}
	height: 20px;
	margin-right: 10px;
	margin-left: 10px;
	width: 2px;
	background-color: #7c6b50; ;
`
export const Wrapper = styled.div``
