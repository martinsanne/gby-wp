export const themeColors = [
  "#007dbf",
  "#d52784",
  "#00a67a",
  "#f0b8cf",
  "#ffe349",
]

export const pictureOverlayColors = {
  orange: "#E98453",
  green: "#00A378",
  blue: "#0079C2",
  pink: "#D45278",
  red: "#EC6358",
}

const endpoints = {
  development: "http://oya.test",
  staging: "https://stagingapi.oyafestivalen.no",
  production: "https://stagingapi.oyafestivalen.no",
}

export const getApiURL = () => {
  let env = process.env.NODE_ENV || "development"
  if (process.env.TYPE) {
    env = process.env.TYPE
  }
  const ep = endpoints[env] ? endpoints[env] : endpoints.production
  return ep
}

/*

export const defaultLang = 'nb' // YES! It's "nb" and not "no"
export const languages = {
  en: {
    hreflang: 'en',
    code: 'en',
    url: '/en/',
    displayName: 'English'
  },
  nb: {
    hreflang: 'no',
    code: 'nb',
    url: '/',
    displayName: 'Norsk'
  }
}

const envSettings = {
  development: {
    en: {
      endpoint: 'http://oya.test/en/wp-json'
    },
    nb: {
      endpoint: 'http://oya.test/wp-json'
    }
  },
  production: {
    en: {
      endpoint: '/api/en/wp-json'
    },
    nb: {
      endpoint: '/api/wp-json'
    }
  }
}
let env = process.env.NODE_ENV === 'development' ? 'development' : 'production'


export const settings = envSettings[env]
*/
