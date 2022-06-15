import crypto from 'crypto';

interface BlockShape {
	hash: string;
	prevHash: string;
	height: number;
	data: string;
}

class Block implements BlockShape {
	public hash: string;
	constructor(public prevHash: string, public height: number, public data: string) {
		this.hash = Block.calcalateHash(prevHash, height, data);
	}

	static calcalateHash(prevHash: string, height: number, data: string) {
		const toHash: string = `${prevHash}${height}${data}`;
		return crypto.createHash('sha256').update(toHash).digest('hex');
	}
}
