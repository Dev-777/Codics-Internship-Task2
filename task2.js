window.onload = ()=>{
	let inp = document.getElementById('inp')
	let but = document.getElementById('but')
	let result = document.getElementById('result')
	
	const brackets=(val)=> {
	
		let stack = [];
		let current;
		const characters = {
			"(": ")",
			"[": "]",
			"{": "}",
		};
		
		for (let i = 0; i < val.length; ++i) {
			current = val[i];
			
			if (current === '(' || current === '[' || current === "{") {
				stack.push(current);
				
			} else if (current === ')' || current === ']' || current === "}") {
				const lastBracket = stack.pop();
				
				if (characters[lastBracket] !== current) {
					return false;
				}
			}
		}
		
		return stack.length === 0;
	}
	
	but.addEventListener('click', ()=>{result.innerHTML =`Result ${brackets(inp.value)}`})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}















