import { armamentUpgrades } from './armament'
import { commandUpgrades } from './command'
import { commsUpgrades } from './comms'
import { forceUpgrades } from './force'

export const allUpgrades = [...armamentUpgrades, ...commandUpgrades, ...commsUpgrades, ...forceUpgrades]
