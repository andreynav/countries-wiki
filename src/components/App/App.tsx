import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RegionT } from '../../types/types'
import { Country } from '../Country/Country'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { NotFound } from '../NotFound/NotFound'

export const App = () => {
  const [region, setRegion] = useState<RegionT>({ value: 'America', label: 'America' })

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main region={region} setRegion={setRegion} />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
