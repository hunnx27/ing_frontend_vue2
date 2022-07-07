# vue2_boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 추가 설정

### Vuetify
```
vue add vuetify
```
옵션 선택 기본 선택
>Choose a preset: **Default (recommended)**


### 로그인 샘플
```
npm install pug-plain-loader pug -D
npm i axios -D
```

### 최초 실행 script
```
npm i -g @vue/cli
```

### 실행
docker run -it -d -p 80:80 -v /home/ubuntu/iscream-kids/oneandzip_fo/nginx/conf.d:/etc/nginx/conf.d --name onz-fe-vue hunnx27/onz-fe-vue:latest
docker run -it -d -p 80:80 --name onz-fe-vue hunnx27/onz-fe-vue:latest
