const tokens = require('../settings/tokens.json')
const { prefix } = require('../settings/prefix.json')

import listener from './utils/message_listener'
import { Message } from 'discord.js'


new listener({

    disableMentions: 'everyone'

}, tokens.BOT_TOKEN)



const options: Array<string> = ['eval', 'send', 'massdm', 'spam']



export default class input {


    constructor (message: Message) {

        if (!message.content.startsWith(prefix)) return
        if (message.author.id !== tokens.OWNER_ID) return

        
        const [trigger, ...args] = message.content.slice(prefix.length).split(/ +/gm)


        if (!options.includes(trigger)) return

        const data = {
            args: args,
            spamID: ''
        }

        if (trigger == 'spam' || trigger == 'eval') data.spamID = message.channel.id

        const file = require(`./options/${trigger}`)

        return file.run(data)

    }


}