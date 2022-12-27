import React from "react";

/** 페이지 로딩이 완료되었음을 감지하기 위한 커스텀 훅 */
const useMountedRef = () => {
    const mountedRef = React.useRef(false);

    React.useEffect(() => {
        // setTimeout의 시간을 설정하지 않았으므로 효과는 없지만 비동기처리를 위해 쓰임.
        setTimeout(() => {
            mountedRef.current = true;
        });
    }, []);

    return mountedRef;
};

export default useMountedRef;