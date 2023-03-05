import { Route, Routes } from 'react-router-dom'

import { Country } from '../Country/Country'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:name" element={<Country />} />
        {/*<Route path="/*" element={<NotFound />} />*/}
      </Routes>
    </>
  )
}
