let all_btn = document.getElementById("all_btn");
let webapp_btn = document.getElementById("webapp_btn");
let hp_btn = document.getElementById("hp_btn");

// すべての制作実績カードを取得
const workCards = document.querySelectorAll('.works_work_box');
const filterButtons = document.querySelectorAll('.worksPage_works_filter_button');

// フィルター機能
function filterWorks(category) {
    workCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
    
    // アクティブボタンのスタイル更新
    updateActiveButton(category);
}

// アクティブボタンの表示を更新
function updateActiveButton(category) {
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // クリックされたボタンを特定
    const categoryMap = {
        'all': all_btn,
        'webapp': webapp_btn,
        'hp': hp_btn
    };
    
    if (categoryMap[category]) {
        categoryMap[category].classList.add('active');
    }
}

// ボタンのクリックイベント
all_btn.addEventListener('click', () => filterWorks('all'));
webapp_btn.addEventListener('click', () => filterWorks('webapp'));
hp_btn.addEventListener('click', () => filterWorks('hp'));

// ページロード時に「全て」を選択状態にする
document.addEventListener('DOMContentLoaded', () => {
    filterWorks('all');
});