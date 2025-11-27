import styled from "styled-components"

export const Container = styled.div`
	background: rgb(171, 203, 242);
	background: linear-gradient(
		156deg,
		rgba(171, 203, 242, 1) 0%,
		rgba(134, 161, 195, 1) 100%
	);
	position: relative;
	overflow: hidden;
	/* box-shadow: inset 0px 11px 15px -10px rgba(0,0,0,.3), inset 0px -11px 15px -10px rgba(0,0,0,.3); */
`
export const Inner = styled.div`
	max-width: 1650px;
	margin: 0 auto;
	color: white;

	padding: 60px 50px 40px 50px;
	text-align: center;
	@media screen and (max-width: 800px) {
		padding: 30px 20px 30px 20px;
	}
`
export const Quote = styled.h2`
	font-size: 23px;
	font-family: "Cinzel", serif;

	color: white;
	padding: 0 0 0 0;
	max-width: 80%;
	@media screen and (max-width: 800px) {
		max-width: 100%;
		font-size: 18px;
		padding-top: 20px;
	}
	margin: 0 auto;
	opacity: 1;
	position: relative;
	z-index: 1;
`
export const Author = styled.p`
	text-align: center;
	padding-top: 15px;
	font-family: "PT Serif", serif;
	font-weight: 600;
	margin: 0;
	opacity: 1;
	color: rgb(92, 112, 137);
	@media screen and (max-width: 800px) {
		padding-bottom: 20px;
	}
`
export const Ellipsis = styled.div`
	position: absolute;
	${({ position }) =>
		position === "top" ? `top:30px; left:0` : "bottom:30px; right:0;"}
	@media screen and (max-width: 800px) {
		position: initial;
	}
	img {
		height: 30px;
		@media screen and (max-width: 800px) {
			height: 20px;
		}
	}
`

export const Compass = styled.div`
	position: absolute;
	top: 30%;
	left: 1%;
	z-index: 0;
	opacity: 0.1;
	height: 100%;
	/* transform: translateY(-40%); */

	transform: skew(30deg, 15deg);

	img {
		height: 200%;
	}
	@media screen and (max-width: 800px) {
		/* transform: translateY(-60%); */
	}
`
