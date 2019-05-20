import locales from "../../config/i18n"

export const getLocalizedSlug = (path, node) => {
  return locales[node.locale].default
    ? `${path}${node.slug}`
    : `/${locales[node.locale].path}${path}${node.slug}`
}

export const getTranslationSlug = (path, locale, slug) => {
  return locales[locale].default
    ? `${path}${slug}`
    : `/${locales[locale].path}${path}${slug}`
}

export const types = {
  page: {
    path: "/",
  },
  post: {
    path: "/posts/",
  },
}

export const resolvePostTypeLink = node => {
  const path = types[node.type] ? types[node.type].path : "/"
  return getLocalizedSlug(path, node)
}
