package controllers

import (
	"hellocrud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUnitRosterController(c *gin.Context) {
	gottenUnitTypes, err := models.GetUnitRosterFromDb()
	if err != nil {
		c.Status(http.StatusNotFound)
	} else {
		c.JSON(200, gottenUnitTypes)
	}

}
