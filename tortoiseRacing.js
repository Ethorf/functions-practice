function race(v1, v2, lead) {
	// your code
	let resultArr = [];
	//v1,v2 is ft per hour
	const ftPerMin = (s) => {
		return s / 60;
	};

	const ftPerSec = (s) => {
		return s / 3600;
	};
	let globalSeconds = 0;
	// return ftPerMin(v1);
	let v1DistanceInFt = 0;
	let v2DistanceInFt = 0;

	//distance calculation loop for v1
	for (let seconds = 0; seconds < 1190; seconds++, globalSeconds++) {
		v1DistanceInFt = seconds * ftPerSec(v1);

		if (v1DistanceInFt == lead) {
			for (let seconds2 = 0; seconds2 < 1190; seconds2++) {
				v2DistanceInFt = seconds2 * ftPerSec(v2);
				if (v2DistanceInFt >= v1DistanceInFt) {
					// console.log(`time to get to lead: ${globalSeconds}`);
					return `time to get to lead: ${seconds2}`;
				}
			}
		}
		// return globalSeconds;
	}
}
console.log(race(720, 850, 70));

//could try to create two nested loops with that are increasing their time functio
// i,e ft per second = the second * that and just have the second bunnie either start at a deficiet
// going to have to calculate speed per hour first
// or just say when tort1's ft elapsed == the headstart, start the other counter
// could just try to work this out/ w two nested loops first
// so this would need two counters, one for ft and one for seconds
//then you would just make the division on the answer instead of counting the second / min divisions from the start
// wait does it matter if the loop goes up once every second or is that just kind of the way we are representing seconds?
//i.e. it doesn't matter how much real life time has elapsed
///
// I think I'm getting dicked by the nesting of loops here. maybe try the deficit idea
s