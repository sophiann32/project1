//  스클로 버튼
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
//  다크모드 토글
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}