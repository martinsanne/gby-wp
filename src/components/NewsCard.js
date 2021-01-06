import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { isBrowser } from "../utils/helpers"
import { bp } from "../styled/utils/breakpoints"
import { spacing } from "../styled/utils/spacing"

import {
  FeaturedImageAspect,
  PostDate,
  Html,
  Illustration,
  Overlay,
} from "./utils"

const NewsCard = ({ post, className }) => {
  const [illuRight, setIlluRight] = useState(false)
  const [showIllu, setShowIllu] = useState(false)

  useEffect(() => {
    const showIllu = isBrowser && Boolean(Math.random() < 0.35)
    if (showIllu) {
      setShowIllu(showIllu)
      setIlluRight(Boolean(Math.random() > 0.25))
    }
  }, [])

  return (
    <Wrapper
      as={Link}
      to={post.link}
      $illuPos={illuRight ? "right" : "left"}
      className={className}
    >
      {post.featured_image ? (
        <div className="NewsCard__image">
          <Overlay className="NewsCard__overlay">
            <FeaturedImageAspect
              key={post.id}
              {...post.featured_image}
              className="aspect-sm--landscape"
              maxWidth={1000}
            />
          </Overlay>
          {showIllu && (
            <Illustration className="NewsCard__illustration" src="random" />
          )}
        </div>
      ) : (
        <div className="aspect aspect-sm--landscape" />
      )}
      <div className="NewsCard__content">
        <small>
          <PostDate className="NewsCard__date" date={post.date} />
        </small>
        <h3 className="NewsCard__title">
          <Html
            stripTags={true}
            content={post.title.rendered || post.title} // client rendering needs post.title.rendered (See: LatestPosts.js)
          />
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div(
  ({ theme, $illuPos }) => css`
    display: block;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    ${spacing("md", ["margin-bottom"])};

    .NewsCard__overlay {
      will-change: transform;
      transition: transform 0.3s ease;
    }

    .NewsCard__image {
      position: relative;
      transition: 0.3s ease;
      ${spacing("xs", ["margin-bottom"])};
      border: 2px solid ${theme.colors.white};
      background: #fff;
    }

    .NewsCard__date {
      transition: 0.3s ease;
      display: inline-block;
      ${spacing("xs", ["margin-bottom"])};
    }

    .NewsCard__title {
      ${spacing("xs", ["margin-bottom"])};
    }

    .NewsCard__image__content {
      ${spacing("xs", ["margin-bottom", "margin-top"])};
    }

    .NewsCard__illustration {
      position: absolute;
      width: 200px;
      height: 200px;
      z-index: 9999;
      bottom: 0;
      transform: translateZ(0);
      display: none;

      ${bp({
        xs: css`
          ${$illuPos}: -60px;
        `,
        sm: css`
          display: block;
          ${$illuPos}: -100px;
        `,
        md: css`
          ${$illuPos}: -125px;
        `,
      })}
    }

    &:hover {
      .NewsCard__overlay {
        transform: translateY(-5px);
      }
    }
  `
)

export default NewsCard
