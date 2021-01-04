import React from "react"
import styled, { css } from "styled-components"

const SocialBox = () => {
  return (
    <Wrapper>
      <Block>
        <h3>Følg Øyafestivalen</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Podcaster</li>
          <li>Spotify</li>
          <li>Tidal</li>
        </ul>
      </Block>
      <Block>
        <h4>Meld deg på nyhetsbrevet</h4>
        <div>
          Ikke gå glipp av nyeheter og annet eksklusivt innhold. Abbonner på
          nyhetsbrevet vårt. <a href="#">Les vilkår</a>
        </div>
      </Block>
      <div>
        <input type="email" placeholder="Tast inn epostadresse her" />
        <button>Send inn</button>
      </div>
    </Wrapper>
  )
}

const Block = styled.div`
  padding: 10px;
  border: 2px solid white;
  border-bottom: 0;
`

const Wrapper = styled.div(
  ({ theme }) => css`
    margin-bottom: 30px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
      }
    }
  `
)

export default SocialBox
