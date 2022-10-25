package controllers

import (
	"hellocrud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type PostRequestBody struct {
	UnitId uint `json:"unit_id"`
}

func PostUnitInRosterController(c *gin.Context) {
	body := new(PostRequestBody)
	err := c.BindJSON(body)
	if err != nil {
		c.Status(http.StatusBadRequest)
	}
	gottenUnitTypes, err := models.PostUnitInRosterModel(body.UnitId)
	if err != nil {
		c.Status(http.StatusNotFound)
	} else {

		c.JSON(200, gottenUnitTypes)
	}

}
