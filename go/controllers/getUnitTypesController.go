package controllers

import (
	"hellocrud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUnitTypesController(c *gin.Context) {
	gottenUnitTypes, err := models.GetUnitTypesFromDb()
	if err != nil {
		c.Status(http.StatusNotFound)
	} else {

		c.JSON(200, gottenUnitTypes)
	}

}
