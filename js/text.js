document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.carousel-slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    let intervalId;
    const slideCount = slideItems.length;
    
    // 更新轮播图位置
    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 更新指示点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }
    
    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }
    
    // 自动播放
    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 4000);
    }
    
    // 停止自动播放
    function stopAutoPlay() {
        clearInterval(intervalId);
    }
    
    // 事件监听
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    // 鼠标悬停暂停
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // 初始化
    startAutoPlay();
});