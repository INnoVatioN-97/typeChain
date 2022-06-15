interface Config {
	url: string;
}

/**
 * myPackage.js 모듈이 어떤 함수와 어떤 파라미터가 들어가고, 어떤값을 반환하는지에 대한
 * 정의서와 같은 역할로, 이러한 d.ts 파일의 내용을 토대로 타입스크립트는 컴파일시 각종 모듈을 호출하고, 처리한다.
 */
declare module 'myPackage' {
	function init(config: Config): boolean;
	function exit(code: number): number;
}
