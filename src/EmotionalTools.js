import styled from '@emotion/styled'
import WebFont from 'webfontloader'
import {Link} from 'react-router-dom'

WebFont.load({
  google: {
    families: ['Oxygen', 'Varela Round', 'sans-serif'],
  },
})


const styleVariables = {
  mainFontColor: '#22282e',
  mainBackgroundColor: '#edf1f2',
  mainBrandColor: '#797564',
  secondaryFontColor: '#6e89a0',
  secondaryBackgroundColor: '#81a2a6',
  mainFontFamily: `'Oxygen', 'sans-serif'`,
  secondaryFontFamily: `'Varela Round', 'sans-serif'`,
  fontSizeH1: '2.4rem',
  fontSizeH2: '2rem',
  fontSizeH3: '1.8rem',
  fontSizeH4: null,
  fontSizeH5: null,
  fontSizeH6: null,
  fontSizeH7: null,
  fontSizeP: '1.6rem',
  fontSizeSmall: '1.2rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

//set main background colour
document.body.style.backgroundColor = styleVariables.mainBackgroundColor


export const Container = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: ${props =>
    props.fd === 'c'
      ? 'column'
      : props.fd === 'r'
      ? 'row'
      : props.fd === 'rc'
      ? 'column-reverse'
      : props.fd === 'rr'
      ? 'row-reverse'
      : null};
  justify-content: ${props =>
    props.jc === 'fs'
      ? 'flex-start'
      : props.jc === 'fe'
      ? 'flex-end'
      : props.jc === 'c'
      ? 'center'
      : props.jc === 'sb'
      ? 'space-between'
      : props.jc === 'sa'
      ? 'space-around'
      : props.js === 'se'
      ? 'space-evenly'
      : null};
  align-items: ${props =>
    props.ai === 'fs'
      ? 'flex-start'
      : props.ai === 'fe'
      ? 'flex-end'
      : props.ai === 'c'
      ? 'center'
      : props.ai === 's'
      ? 'stretch'
      : props.ai === 'b'
      ? 'baseline'
      : null};
  align-content: ${props =>
    props.ac === 'fs'
      ? 'flex-start'
      : props.ac === 'fe'
      ? 'flex-end'
      : props.ac === 'c'
      ? 'center'
      : props.ac === 'sb'
      ? 'space-between'
      : props.ac === 'sa'
      ? 'space-around'
      : props.ac === 'se'
      ? 'space-evenly'
      : props.ac === 's'
      ? 'stretch'
      : null};
  flex-wrap: ${props => props.fw};
  background-color: ${props =>
    props.bgColor === 'main'
      ? styleVariables.mainBackgroundColor
      : props.bgColor === 'second'
      ? styleVariables.secondaryBackgroundColor
      : props.bgColor === 'brand'
      ? styleVariables.mainBrandColor
      : props.bgColor};
  margin: ${props => (props.centre === 'y' ? 'auto' : props.margin)};
  border-radius: ${props => props.br};
  box-shadow: ${props =>
    props.shadow === 'y' ? styleVariables.boxShadow : 'none'};
  height: ${props => props.height};
  padding: ${props => props.p};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
`

export const ImageW100 = styled.img`
  max-width: 100%;
  border-radius: ${props => props.round};
`

export const H1 = styled.h1`
  font-size: ${styleVariables.fontSizeH1};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
`
export const H2 = styled.h2`
  font-size: ${styleVariables.fontSizeH2};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
`
export const H3 = styled.h3`
  font-size: ${styleVariables.fontSizeH3};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
`

export const P = styled.p`
  font-size: ${styleVariables.fontSizeP};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${props => props.textAlign};
`

export const Input = styled.input`
  font-size: ${styleVariables.fontSizeP};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${props => props.textAlign};
`
export const EmotionalLink = styled(Link)`
  text-align: center;
  margin: 10px;
  font-family: ${styleVariables.secondaryFontFamily};
  text-decoration: none;
  color: secondaryFontColor;
  font-size: ${styleVariables.fontSizeP};
`