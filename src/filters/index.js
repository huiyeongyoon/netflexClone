export function comCodeName(val, arr, field) {
  const result = arr.find(obj => {
    if (val === null || val === undefined) return undefined
    return obj.cmmnCode === val.toString()
  })
  return result === undefined ? val : field === undefined ? result.cmmnCodeName : result[field]
}
