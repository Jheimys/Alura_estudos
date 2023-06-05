import express from"express"

const app = express()

app.get("/courses", (req, res) => {
   return res.json(["Curso1", "Curso2", "Curso3"])
})

app.post("/courses", (req, res) => {
    return res.json(["Curso1", "Curso2", "Curso3", "Curso4"])
})

app.put("/courses/:id", (req, res) => {
    return res.json(["Curso6", "Curso2", "Curso3", "Curso4"])
})

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso6", "Curso7", "Curso3", "Curso4"])
})

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso6", "Curso7", "Curso4"])
})

app.listen(3333)