## Front-end (Next13)

### frontend/nginx 생성

nginx 설정 (정적 파일을 제공해주기 위한 Nginx를 위해 nginx폴더에 default.config 파일 생성)

default.config

```
server {
    listen 3000

    // api
    location / {

        // html 파일이 위치할 root 설정 -  /location/ 로 갔을때 build파일을 넣어준다. (위에서 생성한)
        root  /usr/share/nginx/html;
        // 사이트에서 index페이지로 할 파일명 설정
        index index.html index.htm;
        // react router를 사요해 페이지 간 이동을 할때 이부분이 필요하다.
        try_files $uri $uri/ /index.html;
    }

}

```

- 라우팅
  React는 SPA로 index.html 하나의 정적파일만 가져서 /home으로 접속하려고 해도 index.html파일에 접근해서 라우팅 해야하는데
  nginx는 이걸 알 수 없다. 그래서 /home으로 접속하려 할 때 /home에 매칭되는 게 없을때 대안으로 index.html을 제공해
  /home으로 라우팅 시킬 수 있게 임의로 설정해줘야한다.

```
       try_files $uri $uri/ /index.html;
```
