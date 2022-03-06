import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   @media(min-width:1024px){
   position: fixed; 
   width: 100%;
   left: 93%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #0e8e8c;
   }
   @media(max-width:1023px){
   position: fixed; 
   width: 100%;
   left: 85%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #0e8e8c;
   }

`