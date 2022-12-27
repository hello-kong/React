/**
 * filename: Footer.js;
 * @description: 페이지 하단 공통 컴포넌트
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

/** 페이지 하단 컴포넌트 스타일 정의 */
const FooterContainer = styled.footer`
    padding: 20px;
    font-size: 20px;
    text-align: center;
    background-color: #ddd;
    font-weight: 700;

    ${mq.maxWidth('sm')`
        padding: 10px;
        font-size: 14px
    `}
`;

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
      <FooterContainer>
        <h2>Footer</h2>
      </FooterContainer>
  );
}

export default Footer;