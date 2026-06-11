
        // ヘッダー要素を取得
        const header = document.getElementById('header');

        // スクロールイベントを監視
        window.addEventListener('scroll', () => {
            // 70px以上スクロールした場合
            if (window.scrollY > 70) {
                header.classList.add('is-transparent'); // 透明にするクラスを追加
            } else {
                header.classList.remove('is-transparent'); // クラスを削除（元の色に戻す）
            }
        });
        $(function(){
            $('.image-slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.image-slider-nav'
            });
            $('.image-slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.image-slider-for',
                dots: false,
                centerMode: false,
                focusOnSelect: true
            });
        });
