import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderContainer>
      <StyledLoader />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledLoader = styled.div`
  display: grid;
  width: 64px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--colors-link);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000, #000, #000) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`
