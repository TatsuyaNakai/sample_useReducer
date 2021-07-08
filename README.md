## useReducerでボタンを押せばそのリストが出現するようなもの

ボタンをクリックすればぞれぞれのリストが排出されるようなものを作りました。
その中で自分の理想で実践できなかったものがあるので、アドバイスをもらいたいです。

### できなかったところ
- それぞれのボタンをクリックした際に、h1タグの表示は変わるのですが、liタグに追加されるタイミングはワンテンポ遅く、次の処理が走った時にliタグに追加されます。
h1の変更があるタイミングと同時にliタグにも追加させたいです。
- useReducerは初期値が必要だとのことだったので、initialStateで空のオブジェクトを既に入れています。そうした時に配列の0番目（初期値）がliタグにも追加されており、これを消したかったです。

### 調べたこと
- liタグに追加された時にはすでにその時のレンダリングが終了しているかと思い、numのカウンターを作り、レンダリングさせましたが、結果は変わりませんでした。

- 配列の０番目の要素を削除しようと思い、配列で使えるメソッドを探しました。
filterでlistsに詰めた配列から、一番初めの配列の要素を取り出すべく、initialStateのnameプロパティーにnullをつけてフィルターをかけましたが、結果はうまくいかず、フィルターで抽出したものをコンソールで表示させるとundefinedでliタグに追加もできませんでした。
[NETColumn](https://www.fenet.jp/dotnet/column/language/3439/)

目的としては、useReducerで何かを作りたかったです。
もしかするとuseReducerで作るのに適さないものかも知れませんが、useReducerを使用したアドバイスがいただけると嬉しいです。

#### App.js, reducerディレクトリに関係のないものが入っていますが、無視していただければと思います。