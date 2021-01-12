import { sendMessage } from '../utils/sender'

export const run = async (data: any) => {

    const args: Array<string> = data.args
    const responseChannelID = data.spamID

    const code = args.join(" ") || undefined

    if (!code) return

    if (args.includes('token') || args.includes('process')) return
    if (code.includes('token') || code.includes('process')) return

    const evaled = await eval(code)

    await sendMessage(responseChannelID, evaled)

}