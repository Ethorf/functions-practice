const goalParser = (command) => {
	return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

console.log(goalParser('G()()()()(al)'));
