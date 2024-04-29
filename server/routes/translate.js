import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.get('/', (req, res) => {
    res.send('Translate route');
});


router.post('/', async (req, res) => {
    try {

        const { code, language } = req.body;
        const completion = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Translate the following code to ${language}:\n\n${code}`,
            // increase output size
            max_tokens: 2000,
        });
        console.log(completion.choices[0].text);
        res.send(completion.choices[0].text);

    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});



export default router;