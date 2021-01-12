import sleep from 'utils/sleep'
import { sendMessage } from '../utils/sender'

export const run = async (data: any) => {

    const args: Array<string> = data.args

    const id = data.spamID

    if (!id) return

    const content = args.join(" ") || undefined

    if (!content) return

    
    let i: number = 0
    for (i; i <= 50; i++) {

        await sleep(2)
        await sendMessage(id, content)

    }

}