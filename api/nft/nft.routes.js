import { Router } from "express";
import { createNFT } from "../../utils/nfts.js";


const nftRouter = Router()
nftRouter
	.get('/nft', (_, res)=>{
		res.send('accediste a nft')
	})
	.post('/nft', async(req, res) => {
		try{
			const {name, description, prompt} = req.body
			const result = await createNFT(name, description, prompt)
			res.json({
				success: true,
				result
			})
		}catch(err){
			res.json({
				error: err
			})
		}
	})

export default nftRouter


