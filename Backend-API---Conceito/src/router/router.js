const { Router } = require("express")
const usuarioController = require("../controller/userController");
 
const router = Router();
 
router.post("/usuario/", (request, response) => {
    usuarioController.create(request, response)
});
 
module.exports = router;  