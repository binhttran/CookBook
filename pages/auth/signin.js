import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
    width: 25%;
    flex-direction: column;
`;

const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 75%;
`;
const Title = styled.h1`
    color: Black;
    text-align: center;
    margin-bottom: 5px;
`;

const Subtitle = styled.h2`
    color: Black;
    text-align: center;
`;

export default function SignIn() {
  return (
    <Container>
        <Left>
            <Title>Cook Book</Title>
           <Subtitle>Sign In</Subtitle>
        </Left>
        <Right> 
            <img src="frontpic.jpg" alt="signin" />
        </Right>
    </Container>
  );
}