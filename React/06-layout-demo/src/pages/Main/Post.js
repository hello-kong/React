/**
 * filename: Post.js;
 * @description: 메인 페이지 포스트 영역 컴포넌트 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

// 컨테이너에 대한 styledComponent 구현
const PostContainer = styled.section`
    flex: 0 1 auto;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}

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
`;

/**
 * 메인 페이지 포스트 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Post = () => {
  return (
      <div>
          {[0,1,2,3].map((v, i) => {
            return (
              <PostContainer key={i}>
                  <h2>TITLE HEADING</h2>
                  <h3>Title description, Dec 7 2017</h3>
                  <FakeImg height='200'>Image</FakeImg>
                  <p>Some text...</p>
                  <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. </p>
                  <br />
              </PostContainer>
            );
          })}
      </div>
  );
}

export default Post;