import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentData, getItem, putItem} from '../slices/DepartmentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

const DepartmentEdit = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

    /** 데이터 가져오기 */
    useEffect(() => {
      dispatch(getCurrentData());
    }, []);

    /** data값의 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
      if (data) {
        return data.find((v, i) => v.id == id);
      } else {
          // 새로고침 시 현재 데이터만 다시 로드함
          dispatch(getItem({id: id}));
      }
    }, [data]);

    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** <form>의 submit 버튼이 눌러졌을 때 호출 될 이벤트 핸들러 */
    const onDepartmentSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.currentTarget;

        // 입력값에 대한 유효성 검사
        // ... 생략 ...

        // 리덕스를 통한 데이터 저장 요청.
        dispatch(putItem({
            id: current.id.value,
            dname: current.dname.value,
            loc: current.loc.value
        })).then((result) => {
            /** Slice의 `postItem.fulfilled`가 먼저 실행 된 후 이곳이 실행된다. */
            // result.meta --> 백엔드에게 전송한 파라미터
            // result.payload --> 백엔드로부터 전송받은 응답결과
            console.log(result);

            // 처리가 완료된 후 상세 페이지로 이동
            // --> 몇번 데이터인지 path파라미터로 전달한다. (querystring도 가능함.)
            navigate(`/department_view/${result.payload.id}`);
        });
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <input type='hidden' name='id' defaultValue={item?.id} />
                    <TableEx>
                        <colgroup>
                            <col width='120' />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className='inputWrapper'>
                                    <input className='field' type='text' name='dname' defaultValue={item?.dname} />
                                </td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className='inputWrapper'>
                                    <input className='field' type='text' name='loc' defaultValue={item?.loc} />
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>
                    <div style={{ textAlign: 'center' }}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
            )}
        </div>
    );
});

export default DepartmentEdit;
