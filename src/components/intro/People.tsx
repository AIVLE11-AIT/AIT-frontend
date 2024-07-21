import React from 'react'
import * as P from './People.style';

function People() {
  return (
    <div>
      <P.PeopleContainer>
          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image></P.Image>
            <P.Name>김진혁</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image></P.Image>
            <P.Name>유희권</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image></P.Image>
            <P.Name>김가린</P.Name>
          </P.PeopleBox>
      </P.PeopleContainer>
      <P.PeopleContainer>
          <P.PeopleBox>
            <P.PartText>Backend</P.PartText>
            <P.Image></P.Image>
            <P.Name>윤영인</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Backend</P.PartText>
            <P.Image></P.Image>
            <P.Name>이한영</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Frontend</P.PartText>
            <P.Image></P.Image>
            <P.Name>이미지</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Frontend</P.PartText>
            <P.Image></P.Image>
            <P.Name>노태규</P.Name>
          </P.PeopleBox>
      </P.PeopleContainer>
    </div>
  )
}

export default People