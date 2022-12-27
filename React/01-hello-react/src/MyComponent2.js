// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수 명시)
import React from 'react';

import MySubComponent from './MySubComponent';

const MyComponent2 = () => {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>

            <MySubComponent></MySubComponent>
            <MySubComponent></MySubComponent>
            <MySubComponent></MySubComponent>
        </div>
    );
};

export default MyComponent2;
