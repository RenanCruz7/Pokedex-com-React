import './index.css';
import styled from 'styled-components';
const AppContainer = styled.div`
  padding: 40px;
  margin: 0 auto;
`;

function App() {
  return (
    <body>
      <AppContainer>
        <h1>Pokedex</h1>
      </AppContainer>
    </body>
  );
}

export default App;
