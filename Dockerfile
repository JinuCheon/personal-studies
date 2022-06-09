#베이스 이미지 명시
FROM alpine

# 추가적으로 필요한 파일들 다운
# RUN command

# 컨테이너 시작시 실행 될 명령어를 명시
CMD ["echo", "hello"]