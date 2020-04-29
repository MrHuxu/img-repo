FROM scratch

COPY . /data/img-repo
RUN ["rm", "-rf", "/data/img-repo/gallery", "/data/img-repo/blog-title"]