// ヘッダー要素を取得
const header = document.getElementById("header");

// スクロールイベントを監視
window.addEventListener("scroll", () => {
    // 70px以上スクロールした場合
    if (window.scrollY > 70) {
        header.classList.add("is-transparent"); // 透明にするクラスを追加
    } else {
        header.classList.remove("is-transparent"); // クラスを削除（元の色に戻す）
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        // クラスの付け外し
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");

        // アクセシビリティ対応（支援技術に開閉状態を伝える）
        const isOpen = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // リンクをクリックしたときにメニューを閉じる（実用的なおまけ機能）
    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
});

if (window.jQuery) {
    $(function () {
        $(".image-slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".image-slider-nav",
        });
        $(".image-slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".image-slider-for",
            dots: false,
            centerMode: false,
            focusOnSelect: true,
        });
    });
} else {
    console.warn("jQuery is not loaded; image slider is skipped.");
}
