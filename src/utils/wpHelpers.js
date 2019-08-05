export const createSocialLinksFromYOAST = yoastData => {
  const yoastSocialLinksMap = {
    facebook_site: {
      title: "Facebook",
      icon: "facebook",
    },
    instagram_url: {
      title: "Instagram",
      icon: "instagram",
    },
    google_plus_url: {
      title: "Google+",
      icon: "googleplus",
    },
    linkedin_url: {
      title: "LinkedIn",
      icon: "linkedin",
    },
    myspace_url: {
      title: "MySpace",
      icon: "myspace",
    },
    pinterest_url: {
      title: "Pinterest",
      icon: "pinteres",
    },
    twitter_site: {
      title: "Twitter",
      icon: "twitter",
      url: username => {
        return `https://twitter.com/${username}`
      },
    },
  }

  const socialLinks = Object.keys(yoastSocialLinksMap).reduce((acc, key) => {
    const setting = yoastSocialLinksMap[key]
    const value = yoastData[key]
    if (setting && value) {
      const url = setting.url ? setting.url(value) : value
      acc.push({
        icon: setting.icon,
        url: url,
        title: setting.title,
      })
    }
    return acc
  }, [])

  return socialLinks
}

export const acfImageToSrcArray = (image, maxSize = 99999) => {
  const { sizes } = image
  // const aspect = height/width
  // Remove sizes if multiple of same size
  const sizesFiltered = Object.keys(sizes).reduce((build, key) => {
    if (key.indexOf("_width") !== -1) {
      const value = sizes[key]
      if (value <= maxSize) {
        const width = key.replace("_width", "")
        build[value] = sizes[width]
      }
    }
    // For api calls that use underscore
    if (key.indexOf("-width") !== -1) {
      const value = sizes[key]
      if (value <= maxSize) {
        const width = key.replace("-width", "")
        build[value] = sizes[width]
      }
    }
    return build
  }, {})

  return sizesFiltered
}

export const acfImageToSrcset = (image, maxSize = 99999) => {
  const sizesFiltered = acfImageToSrcArray(image, maxSize)
  return srcArrayToSrcset(sizesFiltered)
}

export const srcArrayToSrcset = sizes => {
  const srcsetArray = Object.keys(sizes).map(size => {
    return `${sizes[size]} ${size}w`
  })
  return srcsetArray.join(", ")
}
