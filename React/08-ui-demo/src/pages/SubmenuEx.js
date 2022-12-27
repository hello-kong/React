import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import btn from '../assets/img/btn.png';
import btnOver from '../assets/img/btn_over.png';

const MenuContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    .link {
        display: block;
        width: 179px;
        height: 48px;
        background: url(${btn});
        line-height: 48px;
        text-align: center;
        font-weight: bold;
        color: #cfdfb5;
        text-decoration: none;

        &:hover {
            background: url(${btnOver});
        }
    }

    .menu-item {
        flex: 0 0;
        /** 서브메뉴의 기준점을 부모요소로 지정하기 위한 처리 */
        position: relative;

        /** 서브메뉴가 펼쳐지더라도 다른 요소들 위에 떠 있어야 하므로 position 처리 */
        .sub {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: 1000;
            max-height: 0;
            overflow: hidden;
            transition: max-height 180ms ease-out;
            // max-height 을 준 이유 --> 그냥 height로는 transition이 안먹기 때문.
        }
    }
`;

const SubmenuEx = memo(() => {
    const onMenuItemOver = useCallback((e) => {
        const current = e.currentTarget;
        // ☆★☆★☆★☆★ document.querySelector라고 하면 안됨.☆★☆★☆★
        const sub = current.querySelector('.sub');
        // scrollHeight는 요소의 크기를 벗어난 만큼의 높이를 의미
        sub.style.maxHeight = sub.scrollHeight + 'px';
    }, []);

    const onMenuItemOut = useCallback((e) => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        sub.style.maxHeight = null;
        // 0px로 해도 똑같음.

    }, []);
    return (
        <div>
            <h2>SubmenuEx</h2>

            <MenuContainer>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'> Frontend</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>HTML+CSS</Link></li>
                        <li><Link to='#' className='link'>JavaScript</Link></li>
                        <li><Link to='#' className='link'>jQuery</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'> Backend</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>PHP</Link></li>
                        <li><Link to='#' className='link'>JSP</Link></li>
                        <li><Link to='#' className='link'>Node.js</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'> Mobile</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>iOS</Link></li>
                        <li><Link to='#' className='link'>Android</Link></li>
                        <li><Link to='#' className='link'>Hybrid</Link></li>
                    </ul>
                </li>
            </MenuContainer>

            {/* 페이지 컨텐츠를 가정한 요소 */}
            <h1>Hello World</h1>
        </div>
    );
});

export default SubmenuEx;