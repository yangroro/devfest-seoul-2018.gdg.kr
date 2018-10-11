import { css } from 'styled-components'

export const ON_MOBILE = '(max-width: 960px)'

export const radStyle = css`
  border-top-left-radius: ${p => p.radius};
  border-bottom-left-radius: ${p => p.radius};
  border-bottom-right-radius: ${p => p.radius};
`

export const enumerize = (...args) => {
  let cacheStore = {}
  args.forEach(item => {
    cacheStore[item] = `${item}`
  })
  return cacheStore
}
