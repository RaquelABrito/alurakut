import styled from 'styled-components'

  //const Title = styled.h1`
  //  font-size: 50px;
  //  color: ${({ theme }) => theme.colors.primary};
  //`

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  
    @media(min-width: 860px){
      grid-tempalte-areas: 
       "profileArea welcomeArea profileRelationsArea";
      grid-tamplete-columns: 160px 618px 312px;
    } 
`;  

export default function Home() {
  return (
    <MainGrid>
      <Box style={{ gridArea: 'profileArea' }}>
        Imagem
      </Box>
      <Box style={{gridArea: 'welcomeArea'}}>
        Bem vindo
      </Box>
      <Box style={{gridArea: 'profileRelationsArea'}} >
        pessoas da comunidade 
      </Box>
    </MainGrid>
  );
}
