import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color:  #4e4b6b;
   font-family: "CircularStd-Bold", Helvetica, Arial, serif;

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14.0px;
      font-weight: 300;
      line-height: 21.0px;
   }

`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 825px;

`
export const Header = styled.div`
   display: flex;
   flex-direction: column;
`

export const Lists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  h3 {
   font-size: 22.05px;
    color: rgba(78, 75, 107, 1.0);
    text-align: left;
    line-height: 25.72px;
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  flex-wrap: wrap;
`
