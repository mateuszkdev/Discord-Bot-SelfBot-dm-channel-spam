import { Client, ClientOptions } from 'discord.js'
import catchMessage from '../index'

export default class listener extends Client {

    clientToken;

    constructor (options: ClientOptions, clientToken: string) {

        super (options)

        this.clientToken = clientToken

        this.login(this.clientToken)

        this.on('message', async message => {

            new catchMessage(message)

        })

    }

}