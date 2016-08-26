## wedding-gallery
A simple RWD gallery [http://slash.tw/apps/wedding-gallery](http://slash.tw/apps/wedding-gallery)

## built image
```docker build -t slash/wedding-gallery .```

## run container
```docker run -d --restart=always --name wedding-gallery -p 7777:7777 slash/wedding-gallery```

## Enter the container
```docker exec -it <container id> /bin/bash```
