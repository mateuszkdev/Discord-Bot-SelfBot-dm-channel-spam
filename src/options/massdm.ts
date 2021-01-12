const { IDS } = require('../../settings/mass_dm_its.json')

import { sendMessage } from '../utils/sender'
import sleep from '../utils/sleep'

export const run = async (data: any) => {

    const args: Array<string> = data.args

    if (args[0] !== 'start') return

    const MASS_DM_CONTENT: string | undefined = args.slice(1).join(" ") || undefined

    if (!MASS_DM_CONTENT) return

    IDS.forEach( async (id: any) => {

        await sleep(2)

        await sendMessage(id, MASS_DM_CONTENT)

    })

}