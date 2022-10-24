package main

import (
	"hellocrud/controllers"

	"github.com/gin-gonic/gin"
)

const baseRoute = "/api/v1/"

func SetupRouter(context *gin.Engine) {
	context.GET(baseRoute+"units/types", controllers.GetUnitTypesController)
}
