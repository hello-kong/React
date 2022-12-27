import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getKakaoSearch = createAsyncThunk("ImageSearchSlice/getKakaoSearch", async (payload, { rejectWithValue }) => {
    let result = null;
    
    try {
        const response = await axios.get(process.env.REACT_APP_KAKAO_IMAGE_SEARCH_API_URL, {
            params: {
                // 두 개 이상의 파라미터를 json으로 전달할 경우 payload가 json객체
                query: payload.query,
                page: payload.page ? payload.page : 1
            },
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` }
        });
        result = response.data;

    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const ImageSearchSlice = createSlice({
    name: 'ImageSearchSlice',
    initialState: {
        // API 응답 결과 구조를 고려하여 상태값을 초기화 한다.
        data: null,     
        loading: false, 
        error: null     
    },
    reducer: {},
    extraReducers: {
        // 로딩중임을 표시
        [getKakaoSearch.pending]: (state, {payload}) => {
            return{ ...state, loading: true}
        },
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴하는 경우
        [getKakaoSearch.fulfilled]: (state, { meta, payload }) =>{
            // action함수의 meta에는 API에 요청시 전송한 파라미터가 포함되어 있다.
            // 1페이지 이후의 검색 결과는 기존 데이터를 덧붙여야 한다.
            if (meta.arg.page > 1) {
                payload.documents = state.data.documents.concat(payload.documents);
                console.log(`누적 데이터 길이=${payload.documents.length}`);
            }
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getKakaoSearch.rejected]: (state, {payload}) => {
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

export default ImageSearchSlice.reducer;