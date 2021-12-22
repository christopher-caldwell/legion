import camelCase from 'camelcase'

/** Maps `snake_case` values to `camelCase` **NON-RECURSIVELY** */
export const singleLevelMapSnakeToCamelCase = <
  ObjectKeys extends string,
  ObjectType extends Record<ObjectKeys, unknown>,
  ReturnTypeKeys extends string,
  ReturnType extends Record<ReturnTypeKeys, unknown>
>(
  objectToConvert: ObjectType
): ReturnType => {
  const convertedObject = Object.entries(objectToConvert).reduce((accumulator, [snakeCaseKey, value]) => {
    return {
      ...accumulator,
      [camelCase(snakeCaseKey)]: value,
    }
  }, {} as ReturnType)
  return convertedObject
}
