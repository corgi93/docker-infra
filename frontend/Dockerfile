# 운영

##################################
#  Nginx가 제공해줄 Build파일을 아래 설정으로 생성 
##################################

# FROM: 베이스 이미지를 도커 허브에서 가져온다
FROM node:alpine as builder

# WORKDIR: 해당 어플리케이션 소스 코드들이 들어간다
WORKDIR /app

# COPY: 소스코드 변경 할 때마다 dependency까지 다시 복사 해주는 수고를 하지 않기위해
# 먼저 종속성 목록을 담고 있는 package.json을 복사한다
COPY ./package.json ./

# RUN: package.json에 명시된 dependency를 다운 받는다 
RUN npm install

# COPY: 이제 모든 소스 코드들을  WORKDIR로 복사해준다
COPY ./ ./

# CMD: 이 컨테이너가 실행될 때 같이 실행할 명령어를 지정한다 - next build 후 next start
CMD ["npm" ,"run" , "builder"] 

##################################
# Nginx를 가동하고 윗 단계에서 생성된 빌드 파일들을 제공 해주고 
# default.config에서 해준 설정을 nginx 컨테이너 안에 있는 설정이 되게 복사 해준다
##################################

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html