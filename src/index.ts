import express from 'express';
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    "email": "henrynnamani12304@gmail.com",
    "current_datetime": new Date().toISOString(),
    "github_url": "https://github.com/gr4yx01/hng-stage-zero-backend"
  })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})