FROM ghcr.io/getzola/zola:v0.15.3

WORKDIR /home/app

COPY . /home/app

CMD ["-r", "/home/app/", "-c", "config.toml", "serve"]