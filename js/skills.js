let all_btn = document.getElementById("all_btn");
let gengo_btn = document.getElementById("gengo_btn");
let framework_btn = document.getElementById("framework_btn");
let tool_btn = document.getElementById("tool_btn");
let db_btn = document.getElementById("db_btn");

// すべてのスキルコンテナを取得
const skillContainers = document.querySelectorAll('.skillsPage_skills_list_container');
const filterButtons = document.querySelectorAll('.skillsPage_skills_filter_button');

// フィルター機能
function filterSkills(category) {
    skillContainers.forEach(container => {
        if (category === 'all' || container.classList.contains(category)) {
            container.style.display = '';
        } else {
            container.style.display = 'none';
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
        'gengo': gengo_btn,
        'framework': framework_btn,
        'tool': tool_btn,
        'db': db_btn
    };
    
    if (categoryMap[category]) {
        categoryMap[category].classList.add('active');
    }
}

// ボタンのクリックイベント
all_btn.addEventListener('click', () => filterSkills('all'));
gengo_btn.addEventListener('click', () => filterSkills('gengo'));
framework_btn.addEventListener('click', () => filterSkills('framework'));
tool_btn.addEventListener('click', () => filterSkills('tool'));
db_btn.addEventListener('click', () => filterSkills('db'));

// ページロード時に「全て」を選択状態にする
document.addEventListener('DOMContentLoaded', () => {
    filterSkills('all');
});