package main

import (
	"log"
	"net/http"
)

func main() {
	port := ":8081"
	log.Println("Starting server at localhost" + port)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})
	http.Handle("/test/", http.StripPrefix("/test/", http.FileServer(http.Dir("./static/test"))))
	http.Handle("/dependencies/", http.StripPrefix("/dependencies/", http.FileServer(http.Dir("./static/dependencies"))))
	http.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("./static/src"))))
	http.Handle("/template/", http.StripPrefix("/template/", http.FileServer(http.Dir("./static/template"))))

	log.Fatal(http.ListenAndServe(port, nil))
}
