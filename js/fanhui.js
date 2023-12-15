document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById('myBtn');

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    });

    // 点击按钮，使得页面返回顶部
    myBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});