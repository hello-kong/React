/**
 * Ajax를 활용하여 백엔드에 데이터 요청 기능을 수행하는 helper 클래스
 * (GET방식에 대해서만 구현되어 있음)
 */
class AjaxHelper {
    /** 싱글톤 객체 */
    static #current = null;
    /**
     * 싱글톤 객체를 생성 후 반환한다.
     * 
     * @returns CookieHelper 타입의 객체
     */
    static getInstance() {
        if (AjaxHelper.#current === null) {
            AjaxHelper.#current = new AjaxHelper();
        }

        return AjaxHelper.#current;
    }

    /**
     * Ajax요청을 처리하고 결과(JSON)을 콜백함수에게 전달한다.
     * ex) request("backend/simple.json", "GET", json => {...});
     * 
     * @param {string} url
     * @param {string} method
     * @param {function} success
     */
    request(url, method, success) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) => {
            const ajax = e.target;

            if (ajax.readyState == XMLHttpRequest.DONE) {
                if (ajax.status == 200) {
                    if (success != undefined) {
                        const json = JSON.parse(ajax.responseText);
                        success(json);
                    }
                } else {
                    const s = parseInt(ajax.status / 100);
                    if (s == 4) {
                        alert('[' + ajax.status + ']' + ajax.statusText + ' - 요청주소가 잘못 되었습니다.');
                    } else if (s == 5) {
                        alert('[' + ajax.status + ']' + ajax.statusText + ' - 서버의 응답이 없습니다.');
                    } else {
                        alert('[' + ajax.status + ']' + ajax.statusText + ' - 요청에 실패했습니다.');
                    }
                }
            }  // end if
        };

        xhr.open(method, url);
        xhr.send();
    }

    requestAsync(url, method = "GET") {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = (e) => {
                const ajax = e.target;

                if (ajax.readyState == XMLHttpRequest.DONE) {
                    if (ajax.status == 200) {
                        const json = JSON.parse(ajax.responseText);
                        // promise기법은 콜백함수를 줄이기 위해 등장한 기법.
                        // 성공했을 경우 콜백 호출이 아닌 resolve를 호출함.
                        // --> 바깥 실행부분의 .then(function() {...}) 영역의 콜백하수를 대신 호출해줌
                        resolve(json);
                    } else {
                    const s = parseInt(ajax.status / 100);
                    let msg = null;

                    if (s == 4) {
                        msg = '요청주소가 잘못되었습니다.';
                    } else if (s == 5) {
                        msg = '서버의 응답이 없습니다.';
                    } else {
                        msg = '알 수 없는 이유로 요청에 실패했습니다.';
                    }

                    // 실패했을 경우 콜백 호출이 아닌 reject를 호출함.
                    // --> 바깥 실행부분의 .catch(function() {...}) 영역의 콜백함수를 대신 호출해줌
                    reject({ status: ajax.status, text: ajax.statusText, msg: msg});
                    }
                } // end if
            };

            xhr.open(method, url);
            xhr.send();
        });
    }
}

// 싱글톤 객체 내보내기
export default AjaxHelper.getInstance();