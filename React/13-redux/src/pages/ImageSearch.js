/**
 * 이 파일을 작업하기 위해서 
 * yarn add react-intersection-observer 설치
 */

import React, { memo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import SearchForm from '../components/SearchForm';
import ImageList from '../components/ImageList';
import ImageView from '../components/ImageView';

// 상태값 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from 'react-redux';
// Slice에 정의된 액션함수 참조
import { getKakaoSearch } from '../slices/ImageSearchSlice';
// 스크롤이 맨 끝에 도착했음을 감지하기 위한 컴포넌트
import { useInView } from 'react-intersection-observer';

import dayjs from 'dayjs';

const ImageSearch = memo(() => {
    // QueryString에서 query라는 이름의 값을 추출
    const { query } = useQueryString();

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // hook을 통해 slice가 관리하는 상태값 가져오기
    const { data, loading, error } = useSelector((state) => state.ImageSearchSlice);

    // 무한 스크롤 관련
    const [isEnd, inView] = useInView();

    // 페이지 이동 관련
    const navigate = useNavigate();

    // 페이지 번호
    const page = useRef(1);

    // 검색어가 전달되었을 경우의 hook
    useEffect(() => {
        // 검색어가 존재한다면 리덕스를 통한 Ajax 데이터 요청
        if (query) {
            // 검색어가 변경되었다는 것은 새로운 검색 결과를 의미하므로 페이지 번호를 1로 리셋한다.
            page.current = 1;
            // 두 개 이상의 파라미터를 사용하여 액셤함수를 디스패치 해야 할 경우 파라미터를 json으로 묶는다.
            dispatch(getKakaoSearch({
                query: query,
                page: page.current
            }));
            // 신규 검색이므로 스크롤바의 위치를 맨 위로 강제 이동
            window.scrollTo(0, 0);
        }
    }, [query]);

    // 사용자가 마지막 요소를 보고 있고, 로딩중이 아니라면
    useEffect(() => {
        if (!data?.meta?.isEnd && !loading && inView ) {
            console.log('스크롤이 맨 끝에 도착함')

            // 페이지 번호를 1 증가시킨다.
            page.current++;

            // 추가 검색 결과를 요청하기 위해서 액셤함수를 디스패치 한다.
            dispatch(getKakaoSearch({
                query: query,
                page: page.current
            }));

            // 페이지 번호를 QueryString으로 기록한다.
            navigate(`${window.location.pathname}?query=${query}&page=${page.current}`);
        }
    }, [inView]);

    return (
        <div>
            <Spinner loading={loading} />
            <SearchForm />

            {error ? (
                <ErrorView error={error} />
            ) : (
                (query && data) && (
                    <ImageList>
                        {
                            // 검색어와 Ajax 처리결과가 존재할 ㅇ우에만 처리함.
                            data.documents.map(({doc_url, image_url, thumbnail_url, display_sitename, collection, width, height, datetime }, i) => {
                                return (
                                    <li className='list-item' key={i}
                                    {...(!data?.meta.isEnd && !loading && data.documents.length -1 === i) ? {ref: isEnd} : {}}>
                                        <a className='list-item-link' href={doc_url} target='_blank' rel='noreferrer'>
                                            <div className='thumbnail'>
                                                <ImageView src={thumbnail_url} alt={display_sitename} />
                                            </div>
                                            <div className='content'>
                                                <h3>{display_sitename}</h3>
                                                <ul>
                                                    <li>{collection}</li>
                                                    <li>이미지 크기: {width}x{height}</li>
                                                    <li>{dayjs(datetime).format('YYY-MM-DD hh:mm')}</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ImageList>
                )
            )}
            
        </div>
    );
});

export default ImageSearch;