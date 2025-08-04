document.addEventListener('DOMContentLoaded', () => {

    // 變數宣告區 (確保這些宣告都在最上方)
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const selectAllButton = document.getElementById('select-all-button'); 
    const platformCheckboxes = document.querySelectorAll('input[name="platform"]');
    const searchUrlTemplates = {
        pchome: 'https://ecshweb.pchome.com.tw/search/v3.3/?q=KEYWORD',
        momo: 'https://www.momoshop.com.tw/search/searchShop.jsp?keyword=KEYWORD',
        shopee: 'https://shopee.tw/search?keyword=KEYWORD',
        amazon: 'https://www.amazon.com/s?k=KEYWORD',
        taobao: 'https://s.taobao.com/search?q=KEYWORD',
        yahoo: 'https://tw.buy.yahoo.com/search/product?p=KEYWORD',
        etmall: 'https://www.etmall.com.tw/Search?keyword=KEYWORD',
        ruten: 'https://www.ruten.com.tw/find/?q=KEYWORD',
        coolpc: 'https://www.coolpc.com.tw/tw/?s=KEYWORD',
        carrefour: 'https://online.carrefour.com.tw/zh/search?q=KEYWORD',
        coupang: 'https://www.coupang.com/zh/search.ping?q=KEYWORD',
        sinya: 'https://www.sinya.com.tw/search/?key=KEYWORD'
    };

    // 為「全選」按鈕加上點擊事件
    selectAllButton.addEventListener('click', () => {
        // 檢查是否所有選項都已經被勾選了
        const allChecked = Array.from(platformCheckboxes).every(checkbox => checkbox.checked);

        // 如果全部都勾了，就全部取消；否則，就全部勾選
        platformCheckboxes.forEach(checkbox => {
            checkbox.checked = !allChecked;
        });
    });

    // 為「搜尋」按鈕加上點擊事件
    searchButton.addEventListener('click', performSearch);
    
    // 為「輸入框」加上 Enter 鍵事件
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // 執行搜尋的函式
    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            alert('請輸入要搜尋的商品！');
            return;
        }

        const checkedPlatforms = document.querySelectorAll('input[name="platform"]:checked');
        if (checkedPlatforms.length === 0) {
            alert('請至少選擇一個購物平台！');
            return;
        }

        checkedPlatforms.forEach(platformCheckbox => {
            const platformKey = platformCheckbox.value; 
            const urlTemplate = searchUrlTemplates[platformKey];

            if (urlTemplate) {
                const finalUrl = urlTemplate.replace('KEYWORD', encodeURIComponent(query));
                chrome.tabs.create({ url: finalUrl });
            }
        });
    }
});