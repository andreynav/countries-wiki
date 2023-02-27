import styled from 'styled-components'

// import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { Header } from '../Header/Header'

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      {/*<main className="App-header">*/}
      {/*  <LogoSVG />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</main>*/}
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
  //height: 100vh;
  //width: auto;
  //background-color: var(--bg-color);
  //color: white;
  //text-align: center;

  //& .App-link {
  //  color: #61dafb;
  //}

  @media (max-width: 768px) {
    grid-template-columns: 1rem minmax(20rem, 1fr) 1rem;
  }

  @media (max-width: 480px) {
    grid-template-rows: 3rem auto 1fr;
    grid-template-columns: 1rem minmax(10rem, 1fr) 1rem;
  }
`
