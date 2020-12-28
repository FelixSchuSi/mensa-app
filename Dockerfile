FROM golang:alpine
RUN apk update && apk add --no-cache git
COPY . /go/src/gomagestore
WORKDIR /go/src/gomagestore
RUN go get -d -v

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/gomagestore

FROM scratch
WORKDIR /
COPY index.html .
COPY --from=0 /go/bin/gomagestore .
EXPOSE 3000
ENTRYPOINT ["/gomagestore"]