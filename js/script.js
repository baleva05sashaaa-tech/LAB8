// Простой JavaScript для формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим на ${email} в ближайшее время.`);
            
            // В реальном проекте здесь был бы AJAX-запрос
            contactForm.reset();
        });
    }
    
    // Простое сообщение в консоль для проверки
    console.log('Скрипт учебного проекта загружен!');
});