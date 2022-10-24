package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	ginContext := gin.New()
	ginContext.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"*"},
		AllowMethods:  []string{"PUT", "GET", "POST", "DELETE"},
		AllowHeaders:  []string{"Origin", "content-type"},
		ExposeHeaders: []string{"content-type"},
	}))
	SetupRouter(ginContext)
	ginContext.Run("localhost:1338")
}
