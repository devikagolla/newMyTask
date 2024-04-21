import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  color: #ffffff;
  font-size: 30px;
`

export const LeftContainer = styled.div`
  background-color: #1a171d;
  width: 30vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const RightContainer = styled.div`
  display: flex;
  width: 70vw;
  padding: 20px;
  flex-direction: column;
`

export const Button = styled.button`
  background-color: #f3aa4e;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
`

export const Unordered = styled.ul`
  display: flex;
  flex-direction: row;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5vh;
  font-size: 20px;
`

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5vh;
  font-size: 20px;
`
