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

const archivePages = {
  year: {
    template: "year",
    translations: {
      en: {
        slug: "/en/archive/",
      },
      nb: {
        slug: "/arkiv/",
      },
    },
  },
  category: {
    template: "category",
    translations: {
      en: {
        slug: "/en/category/",
      },
      nb: {
        slug: "/kategori/",
      },
    },
  },
}

const getCategoryLink = (locale, slug) => {
  const baseSlug = archivePages.category.translations[locale].slug
  return `${baseSlug}${slug}`
}

const getArchiveLink = (locale, slug) => {
  const baseSlug = archivePages.year.translations[locale].slug
  return `${baseSlug}${slug}`
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
  getArchiveLink,
  archivePages,
  staticPages,
  getStaticPageLink,
  getCategoryLink,
}
