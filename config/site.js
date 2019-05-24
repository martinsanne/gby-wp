const staticPages = {
  search: {
    template: "search",
    translations: {
      en: {
        url: "/en/search/",
        title: "Search",
      },
      nb: {
        url: "/sok/",
        title: "Søk",
      },
    },
  },
}

const getStaticPageLink = (type, locale) => {
  if (
    staticPages[type] &&
    staticPages[type].translations &&
    staticPages[type].translations[locale] &&
    staticPages[type].translations[locale].url
  ) {
    return staticPages[type].translations[locale].url
  }
}

module.exports = {
  staticPages,
  getStaticPageLink,
}
