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

router.post("/", async (req, res, next) => {
  console.log("working post")
  try {
    const newStep = await Step.create(req.body)
    res.status(201).json(newStep)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
