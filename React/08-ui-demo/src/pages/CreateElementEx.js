import React, { memo, useCallback, useRef } from 'react';
import ListContainer from '../components/ListContainer';

const CreateElementEx = memo(() => {
    const comment = useRef();
    const list = useRef();

    const css = {
        marginRight: '10px'
    };

    // 동적으로 <li>태그 Element 객체를 생성하여 리턴하는 함수
    const getItem = useCallback((clsName) => {
        // JS에게 <li>태그를 코딩시킴
        const li = document.createElement('li');
        // CSS 클래그 추가시 add()함수에게 갯수제한 없이 콤마로 구분하여 여러개 지정 가능함.
        li.classList.add('item', clsName);
        // 사용자가 입력한 내용을 <li>태그에 표시함
        li.innerHTML = comment.current.value;

        // <li>에 클릭 이벤트 적용
        li.addEventListener('click', (e) => {
            // 클릭된 자기 스스로를 제거함
            e.currentTarget.remove();
        });

        return li;
    }, []);

    const onAppendChildClick = useCallback((e) => {
        // li태그를 반환받음
        const li = getItem('blue');

        // <ul>태그에 JS가 코딩한 <li>를 자식요소르 추가함 --> 기존 항목을 유지하고 맨 뒤에 추가함.
        list.current.appendChild(li);
    }, [list, getItem]);

    const onInsertBefore1Click = useCallback((e) => {
        // 부모노드.insertBefore(삽입 할 노드, 기분점 노드);
        // -> 기준점이 null인 겨우 appenChild와 동일하게 동작
        list.current.insertBefore(getItem('orange'), null);
    }, [list, getItem]);

    const onInsertBefore2Click = useCallback((e) => {
        // 기준점이 지정된 경우 기준점 직전에 추가됨
        // -> 첫번째 항목 직전에 추가하라는 의미 --> 가장 첫 번째 요소로 추가됨.
        list.current.insertBefore(getItem('pink'), document.querySelector('li:first-child'));
    }, [list, getItem]);

    return (
        <div>
            <h2>CreateElementEx</h2>

            <input type='text' style={css} ref={comment} />
            <button type='button' style={css} onClick={onAppendChildClick}>appendChild</button>
            <button type='button' style={css} onClick={onInsertBefore1Click}>insertBefore1</button>
            <button type='button' style={css} onClick={onInsertBefore2Click}>insertBefore2</button>
            <hr />

            {/* 동적으로 JS가 생성한 HTML요소가 추가될 위치 */}
            <ListContainer ref={list} />
        </div>
    );
});

export default CreateElementEx;