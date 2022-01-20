import style from "styled-components";

export const Container = style.div`
background: #fff;
max-width: 600px;
margin: 0 auto;
border-radius: 15px;
padding:10px;
margin-top: 0.5rem;
 display:flex;
 align-items: center;
 justify-content: center;

 .task-description{
     font-size:1.3rem;
     padding-left:20px;
     flex:1;
 }
 .delete{
     padding:5px
 }

`;
