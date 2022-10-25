package controllers

import (
	"hellocrud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type DeleteRequestBody struct {
	RosterId uint `json:"roster_id"`
}

func DeleteUnitInRosterController(c *gin.Context) {
	body := new(DeleteRequestBody)
	err := c.BindJSON(body)
	if err != nil {
		c.Status(http.StatusBadRequest)
	}
	gottenUnitTypes, err := models.DeleteUnitInRosterModel(body.RosterId)
	if err != nil {
		c.Status(http.StatusNotFound)
	} else {

		c.JSON(200, gottenUnitTypes)
	}

}
