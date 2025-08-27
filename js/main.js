document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service_card');
    const bgImage = document.getElementById('bgImage');
    const bgVideo = document.getElementById('bgVideo');
    let currentCardIndex = 0;

    const backgroundImages = [
        'img/image 18.png',  
        'img/2.png',         
        'img/3.png',         
        'img/4..png',       
        'img/5..png',        
        'img/6.png'          
    ];

    const backgroundTexts = [
        'Ангел Concept — центр премиального ухода и косметологии в Ставрополе',
        'Косметология: уходы, инъекции, лифтинг',
        'Коррекция фигуры и силуэта',
        'SPA и европейские массажи',
        'Велнес-программы и флоатация',
        'Тайские и балийские массажи'
    ];

    function switchCard() {
        console.log('Switching card from', currentCardIndex);

        serviceCards.forEach(card => {
            card.classList.remove('service_card--active');
            const progressBar = card.querySelector('.card_progress_bar');
            if (progressBar) {
                progressBar.style.animation = 'none';
                progressBar.offsetHeight; 
                progressBar.style.animation = null;
                setTimeout(() => {
                    progressBar.style.width = '100%';
                    progressBar.style.background = '#000000';
                }, 100);
            }
        });

        currentCardIndex = (currentCardIndex + 1) % serviceCards.length;

        const activeCard = serviceCards[currentCardIndex];
        activeCard.classList.add('service_card--active');
        
        const activeProgressBar = activeCard.querySelector('.card_progress_bar');
        if (activeProgressBar) {
            setTimeout(() => {
                activeProgressBar.style.width = '0%';
                activeProgressBar.style.background = '#FFFFFF';
                activeProgressBar.style.animation = 'progress 5s linear infinite';
            }, 100);
        }

        const newImagePath = backgroundImages[currentCardIndex];
        const newText = backgroundTexts[currentCardIndex];
        
        const heroTitle = document.querySelector('.hero_title');
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                heroTitle.textContent = newText;
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 400);
        }
        
        if (currentCardIndex === 0) {
            bgImage.style.opacity = '0';
            bgImage.style.transform = 'scale(1.05)';
            setTimeout(() => {
                bgVideo.style.opacity = '1';
                bgVideo.style.transform = 'scale(1)';
            }, 800); 
        } else {
            bgImage.style.backgroundImage = `url(${newImagePath})`;
            bgVideo.style.opacity = '0';
            bgVideo.style.transform = 'scale(1.05)';
            setTimeout(() => {
                bgImage.style.opacity = '1';
                bgImage.style.transform = 'scale(1)';
            }, 800); 
        }

        console.log('Switched to card', currentCardIndex, 'with background image:', newImagePath);
    }

    serviceCards.forEach((card, index) => {
        if (index !== 0) { 
            const progressBar = card.querySelector('.card_progress_bar');
            if (progressBar) {
                progressBar.style.width = '100%';
                progressBar.style.background = '#000000';
            }
        }
    });

    bgImage.style.backgroundImage = `url(${backgroundImages[0]})`;
    bgImage.style.opacity = '0';
    bgVideo.style.opacity = '1';

    setInterval(switchCard, 5000);
    
    console.log('Services slider initialized with', serviceCards.length, 'cards');
});
