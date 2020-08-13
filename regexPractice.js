const noPunc = ['jim', 'slenth', 'boba'];
const punc = ['jim', 'slenth', 'boba!!!!'];

const re = /at/;
const num = 45;
const cat = 'CAt!!??';
const nonPuncFull = /([^a-z]+)|([^A-Z]+)/;
const nonPunc = /[^a-z]+/;

const urlBeginning = /^https?:\/\/?www\./;
const urlEnd = /\.\w+$/;
const urlEnd2 = /\.[\s\S]+$/;

const cnet = 'https://www.cnet.ru';
const ebay =
	'https://www.ebay.ca/itm/adidas-ZX-Torsion-Shoes-Athletic-Sneakers/373036955114?_trkparms=5373%3A5000004397%7C5374%3AFashion+%26+Personal+Care%7C5079%3A5000004397';

// keep this function call here
// console.log(cat.search(re));

const zombie = 'http://www.zombie-bites.com';
const xakep = 'https://www.xakep.com';
const amazon =
	'https://www.amazon.ca/Havaianas-Womens-Tiras-Sandal-Rose/dp/B01M1DKMHP/ref=sr_1_1?dchild=1&pf_rd_p=5bf2b9ac-9429-4380-a053-b0fad0d90a66&pf_rd_r=SJ90H85KABNWWRJFW80M&qid=1594141834&s=shoes&sr=1-1&srs=20841229011';

function domainName(url) {
	const urlBeginning = /^https?:\/\/?w+\./;
	const ebayRe = /^\bebay\b/;
	const amazonRe = /^\bamazon\b/;

	let domain = '';
	let domainNoEnd = url.replace(urlBeginning, '');

	if (ebayRe.test(domainNoEnd)) {
		domain = 'ebay';
	} else if (amazonRe.test(domainNoEnd)) {
		domain = 'amazon';
	} else {
		domain = 'Please enter an ebay or amazon domain';
	}
	return domain;
}
console.log(domainName(amazon));
