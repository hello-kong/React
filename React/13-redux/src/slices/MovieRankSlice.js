import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getMovieRank = createAsyncThunk("MovieRankSlice/getMovieRank", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_KOBIS_API_URL, {
            params: {
                key: process.env.REACT_APP_KOBIS_API_KEY,
                // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다.
                // --> 단일 값인 경우 payload 자체가 그 값, JSON인 경우 payload가 JSON이 된다.
                targetDt: payload.targetDt
            }
        });

        result = response.data;

        // 영화진흥위원회 API는 에러가 발생하더라도 HTTP 상태코드는 200으로 응답이 옹기 떄문에 catch문이 동작하지 않는다
        // 그러므로 직접 에러를 감지해야 한다.
        if (result.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: 500, statusText: result.faultInfo.message};
            throw err;
        }
    } catch (err) {
        // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
        result = rejectWithValue(err.response);
       console.error(err);
    }

    return result;
});

const MovieRankSlice = createSlice({
    name: 'MovieRankSlice',
    // 이 모듈이 관리하고자 하는 상태값들을 명시
    initialState: {
        data: null,     // Ajax 처리를 통해 수신된 데이터
        loading: false, // 로딩여부
        error: null     // 에러정보
    },
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        // 로딩중임을 표시
        [getMovieRank.pending]: (state, {payload}) => {
            return{ ...state, loading: true}
        },
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴하는 경우
        [getMovieRank.fulfilled]: (state, {payload}) =>{
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getMovieRank.rejected]: (state, {payload}) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

export default MovieRankSlice.reducer;