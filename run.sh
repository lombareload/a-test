docker run --rm -v "$PWD/front-end":/app -w /app node:erbium-alpine /bin/sh -c 'yarn && yarn build'
# Just runs an nginx reverse proxy (May require root permissions in linux)
docker run --rm -v "$PWD/default.conf":/etc/nginx/conf.d/default.conf:ro -v "$PWD/front-end/build":/usr/share/nginx/html:ro -p 8080:80 --rm nginx:1.17.6-alpine
