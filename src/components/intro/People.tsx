import React from 'react'
import * as P from './People.style';

function People() {
  return (
    <div>
      <P.PeopleContainer>
          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people1.png'} margin="15px" width="170px"/></P.Image>
            <P.Name>김진혁</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people4.png'} margin="15px" width="170px"/></P.Image>
            <P.Name>유희권</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>AI</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people2.png'} margin="20px" width="200px"/></P.Image>
            <P.Name>김가린</P.Name>
          </P.PeopleBox>
      </P.PeopleContainer>
      <P.PeopleContainer>
          <P.PeopleBox>
            <P.PartText>Backend</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people5.png'} margin="-20px" width="200px"/></P.Image>
            <P.Name>윤영인</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Backend</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people7.png'} margin="10px" width="210px"/></P.Image>
            <P.Name>이한영</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Frontend</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people6.png'} margin="15px" width="170px"/></P.Image>
            <P.Name>이미지</P.Name>
          </P.PeopleBox>

          <P.PeopleBox>
            <P.PartText>Frontend</P.PartText>
            <P.Image><P.Img src={process.env.PUBLIC_URL + '/images/people3.png'} margin="10px" width="190px"/></P.Image>
            <P.Name>노태규</P.Name>
          </P.PeopleBox>
      </P.PeopleContainer>
    </div>
  )
}

export default People