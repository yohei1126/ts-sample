export class Hello {
	static say() {
		console.log('Hello TypeScript!');
	}
}

export class Word {
	private word: string;
	
	setWord(word: string) {
		this.word = word;
	}
	
	getWord() {
		return this.word;
	}
}
