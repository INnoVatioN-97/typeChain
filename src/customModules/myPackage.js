/* 
    이러한 js 패키지가 있다고 가정할 때
    js 패키지를 타입스크립트에서 사용하기 위해서는 이 패키지에 대한 정의(Declare)가 필요하다.
    이러한 정의는 ~~.d.ts 파일에서 해준다. (myPackage.d.ts 파일 참고)
*/

/**
 *
 * @param {} config
 * @returns
 */
export function init(config) {
	return true;
}

export function exit(code) {
	return code + 1;
}
