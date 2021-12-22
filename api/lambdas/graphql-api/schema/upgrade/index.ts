export const UpgradeSchema = `#graphql

  type UpgradeRestriction {
    alignment: Alignment
    faction: Faction
    isOnlyForVehicles: Boolean
    isOnlyForNonEmplacement: Boolean
    isOnlyForDroids: Boolean
    vehicleType: VehicleType
    vehicle: String
    unit: [String]
  }

  interface Upgrade {
    type: UpgradeType!
    title: String!
    points: Int!
    restriction: UpgradeRestriction
    availableThrough: [String]
    imageSlug: String!
    pointsModifiers?: {
      unit: String
      points: Int!
    }
    isUnique: Boolean
  }

  type Upgrade implements Upgrade {}

  type ListUpgrade implements Upgrade {
    id: String!
    slotIndex: Int!
  }
`
