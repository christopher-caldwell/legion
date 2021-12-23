import { Upgrade, UpgradeType } from 'store'
import { armamentUpgrades } from './armament'
import { commandUpgrades } from './command'
import { crewUpgrades } from './crew'
import { commsUpgrades } from './comms'
// import { commsUpgrades } from './counterpart'
import { forceUpgrades } from './force'
import { gearUpgrades } from './gear'
import { generatorUpgrades } from './generator'
import { grenadesUpgrades } from './grenades'
import { hardpointUpgrades } from './hardpoint'
import { heavyWeaponUpgrades } from './heavyWeapon'
import { ordnanceUpgrades } from './ordnance'
import { personnelUpgrades } from './personnel'
import { pilotUpgrades } from './pilot'
import { trainingUpgrades } from './training'

export const allUpgrades = [
  ...armamentUpgrades,
  ...commandUpgrades,
  ...commsUpgrades,
  ...crewUpgrades,
  ...forceUpgrades,
  ...gearUpgrades,
  ...generatorUpgrades,
  ...grenadesUpgrades,
  ...hardpointUpgrades,
  ...heavyWeaponUpgrades,
  ...ordnanceUpgrades,
  ...personnelUpgrades,
]

export const upgradeMap: Record<UpgradeType, Upgrade[]> = {
  armament: armamentUpgrades,
  crew: crewUpgrades,
  command: commandUpgrades,
  comms: commsUpgrades,
  force: forceUpgrades,
  gear: gearUpgrades,
  generator: generatorUpgrades,
  grenades: grenadesUpgrades,
  hardpoint: hardpointUpgrades,
  'heavy-weapons': heavyWeaponUpgrades,
  ordnance: ordnanceUpgrades,
  personnel: personnelUpgrades,
  pilot: pilotUpgrades,
  training: trainingUpgrades,
}
