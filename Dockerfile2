FROM rockylinux:latest

RUN dnf update -y && dnf install -y nginx && dnf clean all

WORKDIR /usr/share/nginx/
RUN rm -rf html
COPY ./public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
