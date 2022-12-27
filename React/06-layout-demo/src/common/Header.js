/**
 * filename: Header.js;
 * @description: 페이지 상단 공통 컴포넌트
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

/** 페이지 하단 컴포넌트 스타일 정의 */
const HeaderContainer = styled.header`
    .jumbotron {
      padding: 80px;
      text-align: center;
      background: #1abc9c;
      color: #fff;

      h1 {
          font-size: 46px;
          font-weight: 700;
          margin-bottom: 15px;
      }

      p {
          font-size: 20px; 
      }

      ${mq.maxWidth('sm')`
          padding: 40px;

          h1 {
              font-size: 32px;
              margin-bottom: 7px;
          }

          p {
              font-size: 12px;
          }
      `}
    }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className='jumbotron'>
        <h1>My Website</h1>
        <p>React.js Layout Template</p>
      </div>
    </HeaderContainer>
  );
}

export default Header;