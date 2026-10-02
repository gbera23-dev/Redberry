export function formatDuration(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m ? `${h}h ${m}m` : `${h}h`
}

export function formatPrice(amount, currency = 'GBP') {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatReleaseDate(iso) {
  const date = new Date(iso)
  const day = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
  const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
  return `${day} · ${weekday}`
}