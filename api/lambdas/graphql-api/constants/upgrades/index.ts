import { armamentUpgrades } from './armament'
import { commandUpgrades } from './command'
import { commsUpgrades } from './comms'
import { forceUpgrades } from './force'
import { gearUpgrades } from './gear'
import { generatorUpgrades } from './generator'
import { grenadesUpgrades } from './grenades'
import { hardpointUpgrades } from './hardpoint'
import { heavyWeaponUpgrades } from './heavyWeapon'
import { ordnanceUpgrades } from './ordnance'
import { personnelUpgrades } from './personnel'

export const allUpgrades = [
  ...armamentUpgrades,
  ...commandUpgrades,
  ...commsUpgrades,
  ...forceUpgrades,
  ...gearUpgrades,
  ...generatorUpgrades,
  ...grenadesUpgrades,
  ...hardpointUpgrades,
  ...heavyWeaponUpgrades,
  ...ordnanceUpgrades,
  ...personnelUpgrades,
]
