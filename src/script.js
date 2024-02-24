'use strict';

const currentYear = new Date().getFullYear();
const nextYear = new Date(`${currentYear + 1}-01-01:00:00:00`);

const digitSegments = [
	[1, 2, 3, 4, 5, 6], // 0
	[2, 3], // 1
	[1, 2, 7, 5, 4], // 2
	[1, 2, 7, 3, 4], // 3
	[6, 7, 2, 3], // 4
	[1, 6, 7, 3, 4], // 5
	[1, 6, 5, 4, 3, 7], // 6
	[1, 2, 3], // 7
	[1, 2, 3, 4, 5, 6, 7], // 8
	[1, 2, 7, 3, 6], // 9
];

const daysDigits = document.querySelectorAll('.digit--days');
const hoursDigits = document.querySelectorAll('.digit--hours');
const minutesDigits = document.querySelectorAll('.digit--minutes');
const secondsDigits = document.querySelectorAll('.digit--seconds');

const title = document.querySelector('title');

const setDate = function () {
	const currentTime = new Date();
	const timeUntilNextYear = nextYear - currentTime;

	const daysLeft = Math.floor(timeUntilNextYear / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor(timeUntilNextYear / (1000 * 60 * 60)) % 24;
	const minutesLeft = Math.floor(timeUntilNextYear / (1000 * 60)) % 60;
	const secondsLeft = Math.floor(timeUntilNextYear / 1000) % 60;

	title.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

	const daysLeftFormat =
		daysLeft > 99
			? String(daysLeft)
			: daysLeft > 9
			? '*' + daysLeft
			: '**' + daysLeft;

	const hoursLeftFormat = hoursLeft > 9 ? String(hoursLeft) : '*' + hoursLeft;
	const minutesLeftFormat =
		minutesLeft > 9 ? String(minutesLeft) : '*' + minutesLeft;
	const secondsLeftFormat =
		secondsLeft > 9 ? String(secondsLeft) : '*' + secondsLeft;

	daysDigits.forEach((dayDigit, index) =>
		dayDigit.setAttribute('data-value', `${daysLeftFormat[index]}`)
	);
	hoursDigits.forEach((hourDigit, index) =>
		hourDigit.setAttribute('data-value', `${hoursLeftFormat[index]}`)
	);
	minutesDigits.forEach((minuteDigit, index) =>
		minuteDigit.setAttribute('data-value', `${minutesLeftFormat[index]}`)
	);
	secondsDigits.forEach((secondDigit, index) =>
		secondDigit.setAttribute('data-value', `${secondsLeftFormat[index]}`)
	);

	daysDigits.forEach((dayDigit) => {
		const segments = Array.from(dayDigit.children);

		const digit = dayDigit.getAttribute('data-value');

		segments.forEach((segment, index) => {
			segment.classList.remove('segment--on');

			if (digit === '*') {
				return;
			}

			const digitSegment = digitSegments[digit];

			if (digitSegment.includes(index + 1)) {
				segment.classList.add('segment--on');
			}
		});
	});

	hoursDigits.forEach((hourDigit) => {
		const segments = Array.from(hourDigit.children);

		const digit = hourDigit.getAttribute('data-value');

		segments.forEach((segment, index) => {
			segment.classList.remove('segment--on');

			if (digit === '*') {
				return;
			}

			const digitSegment = digitSegments[digit];

			if (digitSegment.includes(index + 1)) {
				segment.classList.add('segment--on');
			}
		});
	});

	minutesDigits.forEach((minuteDigit) => {
		const segments = Array.from(minuteDigit.children);

		const digit = minuteDigit.getAttribute('data-value');

		segments.forEach((segment, index) => {
			segment.classList.remove('segment--on');

			if (digit === '*') {
				return;
			}

			const digitSegment = digitSegments[digit];

			if (digitSegment.includes(index + 1)) {
				segment.classList.add('segment--on');
			}
		});
	});

	secondsDigits.forEach((secondDigit) => {
		const segments = Array.from(secondDigit.children);

		const digit = secondDigit.getAttribute('data-value');

		segments.forEach((segment, index) => {
			segment.classList.remove('segment--on');

			if (digit === '*') {
				return;
			}

			const digitSegment = digitSegments[digit];

			if (digitSegment.includes(index + 1)) {
				segment.classList.add('segment--on');
			}
		});
	});
};

setDate();

setInterval(setDate, 1000);
