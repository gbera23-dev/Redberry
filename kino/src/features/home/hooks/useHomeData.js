import { useEffect, useState } from 'react'
import { catalogueApi } from '../../../api/catalogueApi.js'

const NOW_PLAYING_LIMIT = 10
const COMING_SOON_LIMIT = 8

export default function useHomeData() {
  const [state, setState] = useState({
    hero: [],
    nowPlaying: [],
    comingSoon: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true

    Promise.all([
      catalogueApi.featured(),
      catalogueApi.nowPlaying(NOW_PLAYING_LIMIT),
      catalogueApi.comingSoon(COMING_SOON_LIMIT),
    ])
      .then(([featured, nowPlaying, comingSoon]) => {
        if (!active) return
        setState({
          hero: Array.isArray(featured) ? featured : [featured],
          nowPlaying,
          comingSoon,
          loading: false,
          error: null,
        })
      })
      .catch((error) => {
        if (active) setState((prev) => ({ ...prev, loading: false, error }))
      })

    return () => {
      active = false
    }
  }, [])

  return state
}