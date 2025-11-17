function zm() {
    const zz = document.getElementById('xss');
    
    // نضيف كل الأنيميشن المبهر بـ 3 ثواني
    zz.style.cssText = `
        transition: all 3s cubic-bezier(0.22, 1, 0.36, 1);
        transform: translateY(-150px) rotateX(90deg) scale(0.3);
        opacity: 0;
        filter: blur(2px);
        pointer-events: none;
    `;
    
    // بعد 3 ثواني نطفّيه تماماً عشان ما يأثر على الصفحة
    setTimeout(() => { zz.style.display = 'none'; }, 3000);
}