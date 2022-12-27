import React, { memo, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Table from '../components/Table';

// Axios 기능 제공 hook
import useAxios from 'axios-hooks';
// 페이지의 마운트 여부를 확인하기 위한 hook
import useMountedRef from '../hooks/useMountedRef';

/** 드롭다운을 배치하기 위한 박스 */
const SelectContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;

    select {
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`;

// 접속할 백엔드의 URL
const URL = 'http://localhost:3001/traffic_acc';


const TrafficAcc = memo(() => {
    const [{data, loading, error}, refetch] = useAxios(URL);

    // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
    const [year, setYear] = useState([]);

    // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    const mountedRef = useMountedRef();

    /** 드롭다운 선택 변경시 호출되는 이벤트 */
    const onSelectChange = useCallback(e => {
        e.preventDefault();

        // 드롭다운의 입력값 취득
        const current = e.target;
        const key = current.name;
        const value = current[current.selectedIndex].value;

        /**/
        // 기존의 상태값을 그대로 복사한 상태에서 
        // 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
        const newYear = {...year, [key]: value};

        // 상태값 갱신
        setYear(newYear);

        // 갱신된 상태값 확인
        console.log(newYear);

        // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터 해야 한다.
    }, [year]);
    
    /** state 상태값이 변경되었을 때 실행될 hook */
    useEffect(() => {
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if (mountedRef.current) {
            // 상태값 중에서 빈 값이 아닌 항목들을 옮겨 담는다.
            const params = {};
            for (const key in year) {
                if (year[key]) {
                    params[key] = year[key];
                }
            }

            // Ajax 재요청
            refetch({
                params: params
            });
        }
        // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니텅 해야한다.
    }, [mountedRef, refetch, year]);

    /** 에러가 발생했다면 에러 메세지를 표시한다. */
    if (error) {
        console.error(error);

        // 컴포넌트 자체가 함수이고, 함수가 실행도중 리턴을 하므로 
        // 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다.
        return (
            <div>
                <h1>Oops~!!! {error.code} Error.</h1>
                <hr />
                <p>{error.message}</p>
            </div>
        )
    }

    /** 메인화면 구성 */
  return (
    <div>
      {/* 로딩바 */}
      <Spinner loading={loading}/>

        {/* 검색 조건 드롭다운 박스 */}
        <SelectContainer>
            <select name='year' onChange={onSelectChange}>
                <option value=''>-- 선택 --</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
            </select>
        </SelectContainer>

        <Table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>년도</th>
                    <th>월</th>
                    <th>교통사고 건수</th>
                    <th>사망자 수</th>
                    <th>부상자 수</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(({id, year, month, accident, death, injury}, i) => {
                    
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{year}</td>
                            <td>{month}</td>
                            <td>{accident}건</td>
                            <td>{death}명</td>
                            <td>{injury}명</td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='3'>합계</td>
                    <td>{data && data.reduce((acc, cur) => acc + cur.accident, 0)}건</td>
                    <td>{data && data.reduce((acc, cur) => acc + cur.death, 0)}명</td>
                    <td>{data && data.reduce((acc, cur) => acc + cur.injury, 0)}명</td>
                </tr>
               
            </tfoot>
        </Table>
    </div>
  );
});

export default TrafficAcc;
