import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"


function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title>Design and code React apps</Title>
                    <Discription>
                        Don't skip design. Learn design and code, by building real apps with React and Swift. Complete  course about the best tools.
                    </Discription>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4326db 0%, #9078e7 100%);
`

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 38px
`

const Title = styled(H1)`
    color: ${themes.dark.text1};
`

const Discription = styled(MediumText)`
  line-height: 130%;
  font-size: 17px;
`
