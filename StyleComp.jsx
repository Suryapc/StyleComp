 import styled from "styled-components";
 import { keyframes } from "styled-components";

//  ----TITLE COMPONENT---
  const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    color: #F08080;
    font-weight:800
     `;
// ----- WRAPPER COMPONENT --- 
   const Wrapper = styled.section`
     padding: 20px;
    background: #4682B4;
    `;
// ---ADAPTING BASED ON PROPS---

const Button = styled.button`

background: ${props => props.$primary ? "SteelBlue" : "white"};
font-size: 22px;
margin:45px 65px;
border: 2px solid palevioletred;
border-radius: 5px;
width:240px;
padding: 4px;
`;
// ---OVERRIDING STYLE ---

// The Reg button 
    const Reg = styled.button`
      backgroundColor: #FFA500;
      font-size: 25px;
      margin:45px 65px;
      padding: 4px;
      border: 2px solid palevioletred;
      border-radius: 5px;
      width:220px;
`;

//  Overrided Button
  const TomatoButton = styled(Reg)`
     background-color:#4682B4;
     `;
// ---STYLING A LINK----

  const StyledLink = styled.a`
  color: #F08080;
  font-weight: bold;
  margin-left:80px;
  font-size:40px;
   `;

// ---ANIMATION----

  const rotate = keyframes`
             from {
             transform: rotate(0deg);
                  }

               to {
              transform: rotate(360deg);
                   }`;


  const Rotate = styled.h1`
    animation: ${rotate} 1s linear 10;
    margin-left:270px;
    margin-top:-40px;
    width:200px;
   `;

  const Sun=styled.h1`
     margin-top:100px;
     margin-left:348px`;




function StyleComp (){
  return(
    <>
    <Wrapper>
    <Title> Hello World!</Title>
    </Wrapper>

{/* based on props  */}
      <h3 className="ms-5  text-primary mt-3"><u>Based on Props</u></h3>
      <Button>Normal</Button>
      <Button $primary>Based on Props</Button>
      <br></br>

{/* overriding style */}
       <h3 className="ms-5  text-primary mt-3"><u>Style Overriding</u></h3>
      <Reg>Basic</Reg>
      <TomatoButton>Basic+overrided</TomatoButton>

{/* Styling Link  */}

       <StyledLink>Styled Link</StyledLink>
    
{/* Anima Link  */}

         <Sun>☀️</Sun>
        <Rotate>🌎</Rotate>

      </>)
    }
    export default StyleComp;
    





 
       






















  

 


  

