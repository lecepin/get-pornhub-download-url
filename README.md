# get-pornhub-download-url

获取 P 站视频下载地址的浏览器端脚本。

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/116080723-01488080-a6cc-11eb-9ed2-489be67027a4.png" width="100" /></p>


## 使用

可以用以下方式进行使用。

### 1. 控制台执行脚本方式


复制 [index.js](https://raw.githubusercontent.com/lecepin/get-pornhub-download-url/main/index.js) 中的代码，然后在 P站 具体页面，通过按 `F12` 的方式打开控制台，选择 `Console` 面板，粘贴刚复制的代码，然后回车执行即可。

### 2.在地址栏中执行方式

复制如下代码：

```
javascript:((s) => { s.src = "https://unpkg.com/get-pornhub-video-url"; document.body.appendChild(s);})(document.createElement("script"));
```

打开 P站 的具体页面，在浏览器的地址栏中进行粘贴(注意补充`javascript:`前缀)，回车执行。

> 注意：粘贴的时候，浏览器会把 `javascript:` 给自动去掉，所以 需要在你粘贴到地址栏后，进行手动补充。
> 
### 3.一劳永逸的方式

> 此方法原理和 **2** 类似，不过只需要复制一次就可以了，后面不用再去复制。

1. 打开浏览器的书签管理：`右上角设置 -> 书签 -> 书签管理器`  （或者直接在地址栏中输入 `chrome://bookmarks/` 进行打开）
2. 点击 `添加新书签` ，打开弹出
3. 名称 `获取P站下载地址`，网址 `javascript:((s) => { s.src = "https://unpkg.com/get-pornhub-video-url"; document.body.appendChild(s);})(document.createElement("script"));`，保存。

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/116078586-6058c600-a6c9-11eb-8aaf-eb02d59165dd.png" width="800" /></p>

完成上述操作后，直接在具体的 P站 页面，点击刚创建的标签就可以了：

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/116079090-ff7dbd80-a6c9-11eb-9e2d-2f10bf31f1c0.png" width="800" /></p>

## 效果

执行效果如下所示：

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/116079389-54213880-a6ca-11eb-903c-828dcc3cce8c.png" width="800" /></p>

自动在页面创建浮层，并显示当前视频的所有画质的地址，点击 `下载` 会打开新的页面，点击视频中的下载按钮进行下载即可：

<p align="center"><img src="https://user-images.githubusercontent.com/11046969/116079799-d6116180-a6ca-11eb-9db8-bf2be6108e18.png" width="800" /></p>

---

注意：建议使用 Chrome 浏览器进行上述操作。

