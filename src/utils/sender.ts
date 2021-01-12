import fetch from 'node-fetch'
import { basicURL } from './this_configs'

const tokens = require('../../settings/tokens.json')

export const sendMessage = async (channelID: string, content: string) => {

    const response = await fetch(`${basicURL}/channels/${channelID}/messages`, {

        method: 'GET', 

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${tokens.USER_TOKEN}`
        },

        body: JSON.stringify({
            "tts": false,
            "content": `${content}`
        })

    })

    return await response.json()

}