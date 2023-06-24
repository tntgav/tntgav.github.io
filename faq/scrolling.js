const scrollIndicator = document.getElementById('scroll-indicator');
if (localStorage.getItem('scrollIndicatorUsed') !== 'true') scrollIndicator.classList.remove('used');

window.scroll(0, 0);

const scrollTop = () => window.scroll({ top: 0, behavior: 'smooth' });
const scrollBottom = () => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });

const setUsed = () => {
	scrollIndicator.classList.add('used');
	localStorage.setItem('scrollIndicatorUsed', true);
};

scrollIndicator.onclick = () => {
	scrollBottom();
	setUsed();
};

window.onwheel = event => {
	setUsed();
	// deltaY is negative if you scroll up, positive if you scroll down
	event.deltaY < 0 ? scrollTop() : scrollBottom();
};
