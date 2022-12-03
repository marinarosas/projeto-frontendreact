import styled from "styled-components";

export const ContainerCart = styled.main`
    /* border: 2px solid red; */
    min-height: 82vh;
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const CardUserInfo = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  height: 14vh;
  display: flex;
  justify-content: flex-start;
  color: white;
  padding: 16px 8px;
  width: 100%;
`
export const CardPaymentAdd = styled.div`
/* border: 2px solid yellow; */
background-color: rgba(0, 0, 0, 0.729);
height: 60vh;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 24px;
color: white;
padding: 16px 8px;
padding-right: 18px;
`

export const HeaderPayment = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
`

export const ButtonClose = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    font-size:16px;
    display: flex;
    width: 5%;

    :hover{
    color: orange;
  }
`
export const ExistingCard = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  align-items: center;
  

  img{
    width: 2vw;
    height: 2.5vh;
  }
`
export const TypeOfCard = styled.div`
  display: flex;
  gap: 8px;
`

export const DateExp = styled.div`
  text-align: end;
`

export const LinhaShort = styled.div`
  border: 1px solid gray;
  margin: 0 35px;
`

export const CardInfo = styled.div`
  /* border: 2px solid yellowgreen; */
  width: 12vw;
  display: flex;
  justify-content: space-between;
  img{
    width: 2vw;
    height: 2.5vh;
  }
`

export const BillingInfo = styled.div`
  /* border: 2px solid red; */
  p{
    color: #c559df;
  }
`


export const CartPageStyle = styled.div`
    display: flex;

`
export const FinalCart = styled.div`
    /* border: 2px solid blue; */
    width: 20vw;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.300);
    color: white;
    text-align: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 4vh;
        align-items: center;
    }

    button{
        width: 10vw;
        height: 4vh;
        background-color: green;
        border: none;
        border-radius: 8px;
        color: whitesmoke;
        box-shadow: 2px 4px 26px -3px rgba(255,255,255,1);
    }

    img{
        width: 15vw;
    }
`

export const Title = styled.h3`
  /* border: 2px solid green; */
  width: 35%;
  `

export const InfoCard = styled.p`
/* border: 2px solid blue; */
color: white;
display: flex;
flex-direction: column;
width: 60%;
gap: 4px;
`



export const ButtonChange = styled.button`
    /* border: 2px solid red; */
    background-color: transparent;
    color: white;
    border: none;
    font-size:16px;
    display: flex;
    width: 5%;

    :hover{
    color: orange;
  }
  `
export const CardPayment = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
`
export const HeaderProduct = styled.div`
  /* border: 2px solid red; */
  background-color: rgba(0, 0, 0, 0.729);
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  color: white;
`
export const ContentProduct = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-between;
`
export const ImagemProduto = styled.img`
  /* border: 2px solid blue; */
  width: 10vw;
  align-self: center;
  margin-left: 16px;
`
export const DetalheProduto = styled.div`
    /* border: 2px solid white; */
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    gap: 20px;
    width: 30vw;
    padding-left: 3vw;
`
export const DescricaoProduto = styled.div`
  /* border: 2px solid red; */
  color: white;
  
`
export const PriceCard = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  gap: 40px;
  height: 20vh;
  align-items: center;
  margin: 16px;

  
  p{
    display: flex;
  }

  h2{
    font-size: 38px;
  }
`
export const QuantityProduct = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    justify-content: space-around;
    width: 6vw;
    gap: 8px;

    button{
      font-size: 16px;
      width: 2vw;
    }
`

export const ChoosenSize = styled.p`
  /* border: 2px solid red; */
  display: flex;
  gap: 8px;

  select{
    width: 3vw;
    background: rgba(0, 0, 0, 0);
    border: none;
    color: white;

    /* option{
      background: rgba(0, 0, 0, 0);
      color: black;
    } */
  }

`

