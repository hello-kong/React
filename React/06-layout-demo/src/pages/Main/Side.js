/**
 * filename: Side.js;
 * @description: 왼쪽 사이드바 공통 컴포넌트 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

/** 왼쪽 사이드바 컴포넌트 스타일 정의 */
const SideContainer = styled.div`
    box-sizing: border-box;
    width: 360px;
    flex: none;
    border-right: 1px solid #d5d5d5;
    background-color: #eee;
    padding: 20px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }

    ${mq.maxWidth('sm')`
      width: 100%;
    `}
`;

/**
 * 왼쪽 사이드바 컴포넌트 구현
 * @returns {JSX.Element}
 */

const Side = () => {
  return (
      <SideContainer>
          <h2>About me</h2>
          <h3>Photo of me:</h3>
          <FakeImg height='200'>Image</FakeImg>
          <p>some text about me in culpa qui officia deserunt mollit anim..</p>
          <hr />
          <h2>More Text</h2>
          <p>Lorem ipsum dolor sit ame.</p>
          <FakeImg height='60'>Iamage</FakeImg>
          <br />
          <FakeImg height='60'>Iamage</FakeImg>
          <br />
          <FakeImg height='60'>Iamage</FakeImg>
          <br />
      </SideContainer>
  );
}

export default Side;