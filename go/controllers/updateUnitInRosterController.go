package controllers

import (
	"hellocrud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UpdateRequestBody struct {
	RosterId uint `json:"roster_id"`
	IsAdding bool `json:"is_adding"`
}

func UpdateUnitInRosterController(c *gin.Context) {
	body := new(UpdateRequestBody)
	err := c.BindJSON(body)
	if err != nil {
		c.Status(http.StatusBadRequest)
	}
	gottenUnitTypes, err := models.UpdateUnitInRosterModel(body.RosterId, body.IsAdding)
	if err != nil {
		c.Status(http.StatusNotFound)
	} else {

		c.JSON(200, gottenUnitTypes)
	}

}
