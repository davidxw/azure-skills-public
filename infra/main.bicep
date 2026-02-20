param prefix string = 'store'
param location string = resourceGroup().location

// Generate a 13-char hash based on the resource group ID
var uniqueHash = uniqueString(resourceGroup().id)

// Create a valid name: prefix + unique string (total length < 24)
var storageAccountName = toLower('${take(prefix, 10)}${take(uniqueHash, 13)}')

resource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}
