# images/

ここに以下の画像を配置する：

- `hero.jpg` — ヒーローエリア右側の家具写真（推奨サイズ: 1200x900px）
- `case-01.jpg` — 買取事例①（Cassina LC2など）
- `case-02.jpg` — 買取事例②
- `case-03.jpg` — 買取事例③
- `brands/` — 各ブランドのロゴSVG or PNG（白背景 or 透過）

配置後、index.htmlの `.photo-placeholder` を以下に差し替える：

```html
<img src="images/hero.jpg" alt="高級家具買取イメージ" class="hero-photo-img">
```
