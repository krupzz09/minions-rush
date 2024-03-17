const minion = document.querySelector('.minion');
const leftEye = document.querySelector('.left');
const rightEye = document.querySelector('.right');
const mouth = document.querySelector('.mouth');

const moveMinion = () => {
	const minionTop = minion.offsetTop;
	const minionLeft = minion.offsetLeft;
	const minionWidth = minion.offsetWidth;
	const minionHeight = minion.offsetHeight;

	if (minionTop + minionHeight / 2 < window.innerHeight - 100) {
		minion.style.top = `${minionTop + 1}px`;
	} else {
		minion.style.top = '50%';
	}

	if (minionLeft + minionWidth / 2 < window.innerWidth - 100) {
		minion.style.left = `${minionLeft + 1}px`;
	} else {
		minion.style.left = '50%';
	}
};

const moveEyes = () => {
	const minionTop = minion.offsetTop;
	const minionLeft = minion.offsetLeft;

	leftEye.style.top = `${minionTop + 20}px`;
	leftEye.style.left = `${minionLeft + 50}px`;

	rightEye.style.top = `${minionTop + 20}px`;
	rightEye.style.left = `${minionLeft + 150}px`;
};

const openMouth = () => {
	const minionTop = minion.offsetTop;
	const minionLeft = minion.offsetLeft;

	mouth.style.top = `${minionTop + 150}px`;
	mouth.style.left = `${minionLeft + 50}px`;
};

const closeMouth = () => {
	mouth.style.top = `${minionTop + 200}px`;
};

const animateMinion = () => {
	moveMinion();
	moveEyes();
	openMouth();

	setTimeout(() => {
		closeMouth();
	}, 1000);
};

setInterval(animateMinion, 100);