# Quick Start Guide to TIL

<AssembledByGimunLee/>

<br/>

## Tech Stack

- VuePress → View
- GitHub Repository → Repository
- GitHub Pages → Hosting
- GitHub Actions → Deploy

<br/>

## Step

### 1. Create GitHub Repository & Clone

### 2. Install VuePress

```shell
$ yarn global add vuepress
```

### 3.  Create VuePress Project

```shell
$ cd <repository>

# install as a local dependency
$ yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
$ mkdir docs
# create a markdown file
$ echo '# Hello VuePress' > docs/README.md
```

### 4. Add scripts to package.json

```json
// package.json
{
  "devDependencies": {
    "vuepress": "^1.3.1"
  },
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

### 5. Run

```shell
$ yarn dev
```

### 6. GitHub Actions

**1) Create key pair**

```shell
$ ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# You will get 2 files:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```

**2) gh-pages.pub (public key) → Deploy Keys**

<img src="./resources/quickstart-guide to-til-002.png" width="80%">

**3) gh-pages (private key) → Secrets**

<img src="./resources/quickstart-guide to-til-003.png"  width="80%">

**4) Create wrokflow**

<img src="./resources/quickstart-guide to-til-001.png"  width="50%">

**5) Change the content to the script below**

```yml
name: GitHub Actions Build and Deploy 

on:
  push:
    branches:
    - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
      
    - run: yarn install
      
    - run: yarn build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACCESS_TOKEN }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: docs/.vuepress/dist
```

### 7. GitHub Pages Setting

<img src="./resources/quickstart-guide to-til-004.png"  width="80%">

### 8. Add plugin

**1) back-to-top**

```shell
$ yarn add -D @vuepress/plugin-back-to-top@next
```

```js
// config.js
plugins: [
  '@vuepress/back-to-top',
]
```

**2) PWA**

```shell
$ yarn add -D @vuepress/plugin-pwa@next
```

- Add logo in `.vuepress/public/images` 

- Create manifest.json in `.vuepress/public/`

  ```json
  // manifest.json
  {
    "name": "TIL",
    "short_name": "GimunLee",
    "start_url": "/?utm_source=homescreen",
    "icons": [
      {
        "src": "images/logo-144.png",
        "sizes": "144x144",
        "type": "image/png"
      }
    ],
    "theme_color": "#000000",
    "background_color": "#FFFFFF",
    "display": "fullscreen",
    "orientation": "portrait"
  }
  
  ```

### 9. Customize VuePress Project

```shell
$ yarn build
```

*※ You must run the command above to create `.vuepress`.*

- Add home component → `.vuepress/components/home.vue`
- Add auto-sidebar-generator
- Change accent color → `.vuepress/styles/palette.styl`

<br/>

## References

- [VuePress 공식사이트](https://vuepress.vuejs.org/)
- [Vuepress + GitHub Actions 静态博客全攻略](https://zhuanlan.zhihu.com/p/93030651)
- [Component 실습 | 유기체의 다락방](https://62che.com/blog/vuepress/Component-%EC%8B%A4%EC%8A%B5.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1)
- [Tutorial :: Vuepress로 기술문서 빠르게 만들어보자!](https://limdongjin.github.io/vuejs/vuepress/)

- [Today Yurim Learned](http://milooy.github.io/TIL/)

