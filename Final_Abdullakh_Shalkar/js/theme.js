document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // 1. Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('rmTheme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️'; // Меняем иконку на солнце
    }

    // 2. Обрабатываем клик по кнопке
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Переключаем класс на body
            body.classList.toggle('dark-mode');
            
            // 3. Проверяем текущее состояние и сохраняем в localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('rmTheme', 'dark');
                themeIcon.textContent = '☀️';
            } else {
                localStorage.setItem('rmTheme', 'light');
                themeIcon.textContent = '🌙';
            }
        });
    }
});