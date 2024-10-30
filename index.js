import express from 'express'
import { PORT } from './config.js'
import nftRouter from './api/nft/nft.routes.js'
import cors from 'cors'

const server = express()
server
	.use(cors())
	.use(express.json())
	.get('/PING', (_, res) => {
		res.send('PONG')
	})
	.use(nftRouter)
	.listen(PORT, () => {
		console.log(`Listen on port ${PORT}`)
	})
