import { sendMessage } from '../utils/sender'

export const run = async (data: any) => {

    const args: Array<string> = data.args

    const id = args[0] || undefined

    if (!id) return

    const content = args.slice(1).join(" ") || undefined

    if (!content) return

    await sendMessage(id, content)

}