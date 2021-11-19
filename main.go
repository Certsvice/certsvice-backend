package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

const (
	mongoDBEnPint = "mongodb://localhost:27017"
	portWebServie = ":8080"
)

func main() {
	//sasa
	// connectionDB, err := mgo.Dial(mongoDBEnPint)
	// if err != nil {
	// 	log.Panic("Can no connect Database", err.Error())
	// }
	log.Default()
	println("bbb")
	router := gin.Default()
	// route.NewRouteProduct(router, connectionDB)
	router.Run(portWebServie)
}
