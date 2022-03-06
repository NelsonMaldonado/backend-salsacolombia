const router = require("express").Router()
const Step = require("./catalog-model")

// router.get("*", (req, res) => {
//   res.send("Error 404")
// })
//this is an empty space
router.get("/", async (req, res, next) => {
  console.log("getting all users")
  try {
    const steps = await Step.getAll()
    res.json(steps)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  console.log("getting all users")
  try {
    const steps = await Step.getById(req.params.id)
    res.json(steps)
  } catch (err) {
    next(err)
  }
})
// router.get("/", async (req, res) => {
//     res.json(await getAllUsers())
//   })

router.post("/register", (req, res) => {
  res.send("user registered")
})

//   server.post("/api/users", async (req, res) => {
//     res.status(201).json(await insertUser(req.body))
//   })
module.exports = router
