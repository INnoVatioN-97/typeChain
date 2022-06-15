/* 
    이러한 js 패키지가 있다고 가정할 때
    js 패키지를 타입스크립트에서 사용하기 위해서는 이 패키지에 대한 정의(Declare)가 필요하다.
    이러한 정의는 ~~.d.ts 파일에서 해준다. (myPackage.d.ts 파일 참고)


    만약 아래와 같은 js패키지가 너무도 방대해 이를 d.ts 모듈로 더 생성하기가 어렵다면
    아래와 같이 주석으로 ts-check 하나만 적고, 그 후 파라미터와 리턴값의 형식에 대해서만 기술하는 JSDoc을 사용하면
    타입스크립트가 js파일도 타입체킹을 어느정도 해준다.
*/

//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
	return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
	return code + 1;
}
