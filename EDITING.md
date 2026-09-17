# 編輯位置

- 個人資料與分頁排列：layouts/index.html
- 社群按鈕：layouts/partials/social-links.html
- 顏色、字體、桌面與手機排版：assets/css/profile.css
- 互動功能：assets/js/（依功能命名）
- 關於我：content/about.md
- 收藏、時間軸、狀態、橫幅圖片：data/ 裡對應的 TOML
- Blog 文章：content/posts/
- 興趣心得：也放在 content/posts/，再於 data/library.toml 的 url 填入文章路徑。
- 舊興趣原稿：notes/interests-original.md（不會產生網站頁面）

先本機預覽，確認後再提交、推送。不要修改 public/ 建置結果。

## 新增文章

- 不含圖片：在 content/posts/ 直接新增文章名稱.md。
- 含圖片：新增獨立資料夾，內放 index.md 和圖片。
- 不要把另一篇文章放進 article-template/，這個資料夾是一篇文章的範本，不是所有文章的存放區。
- 範本要複製整個資料夾並重新命名，再編輯裡面的 index.md。
- draft: false 才會顯示在網站。
