# 変更仕様

- プロフィール画像のサイズを大きくする
- ツイートボタンの色を赤に変更する
- サイドバーのボタンにアイコンを追加する
- サイドバーの色を変更する
- テキストエリアのプレースホルダーに"何をつぶやく？"を追加する

# 修正

- プロフィール画像のサイズを大きくする
```
#icon {
  width: 150px;
}
```

- ツイートボタンの色を赤に変更する
```
#tweet-button {
  background-color: red;
}

#tweet-button:hover {
  background-color: darkred;
}
```

- サイドバーの色を変更する
```
.left-sidebar, .right-sidebar {
  background-color: lightblue;
}
```

- サイドバーのボタンにアイコンを追加する
```  
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css">
<button id="home-button"><i class="fa fa-home"></i> Home</button>
```

- テキストエリアのプレースホルダーに"何をつぶやく？"を追加する
```
<textarea id="tweet-text" placeholder="何をつぶやく？"></textarea>
```

