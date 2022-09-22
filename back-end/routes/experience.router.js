const router = require('express').Router();
const experience = require("../Controllers/experience");

// share a new Post experience
router.post("/share", experience.shareExperience)
// delete a post
router.delete("/delete/:id", experience.deleteExp)
// get all post 
router.get("/getAll",  experience.getAllExperience);
//update the post shared
router.put("/put/:id",  experience.updateExp);
//filtering postes by categories and locations
router.post("/search",  experience.filter);
// get one post 
router.get("/getone/:id",  experience.getone);
//filtering postes by Hotels categorie  
router.get("/hotels",  experience.filterbyHotels);
//filtering postes by Others categorie  
router.get("/Others",  experience.filterbyOthers);
//filtering postes by restaurent categorie  
router.get("/Restaurant",  experience.filterbyRestaurent);

module.exports = router;