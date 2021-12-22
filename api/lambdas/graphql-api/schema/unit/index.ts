export const UnitSchema = `#graphql

  enum UnitType {
    commander
    operative
    corps
    forces
    support
    heavy
  }

  enum Alignment {
    dark
    light
  }

  enum Faction {
    empire
    rebel
    cis
    gar
  }

  enum VehicleType {
    repulsor
    ground
  }

  interface Unit {
    title: String!
    subtitle: String
    points: Int!
    isUnique: Boolean!
    unitType: UnitType!
    imageSlug: String!
    availableThrough: [String]
    upgradeSlots: [UpgradeType!]!
    faction: Faction!
    alignment: Alignment
    vehicleType: VehicleType
    isDroid: Boolean
    isEmplacement: Boolean
  }

  type Unit implements Unit {
    upgrades: [Upgrade!]!
  }

  type ListUnit implements Unit {
    id: String!
    updatedAt: Date!
  }
`
