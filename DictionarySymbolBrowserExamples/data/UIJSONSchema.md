### UI JSON Structure

```
{
  "uiFields": [...], // an array of UIFields
  "domains": {
      //a dictionary of domains
      //key is domain name
      //domain is usually coded value domain.
  },
  "symbolValueFromUIFields": {
      //optional.
      //A dictinoary that translate UI Fields into symbol(as defined in dictionary-info.json) values.
      //Defines the symbol-expression pair if the symbol name is different from the UI field name. Example in EVChargeStation.json
      //If they are the same, you don't have to specify them here
      //Key is symbol value
      //Value is an arcade script which takes a "$feature" variable that has the values of the UI fields. 
  },
  //Optional. An arcade script that translate symbol values to UI field values, it returns a dictionary that contains relavent UI field values.
  //You will only need to return the UI Fields that are not defined as a symbol in dictionary-info.json
  "uiFieldsFromSymbolValues": "..." 
}
```
The `symbolValueFromUIFields` and `uiFieldsFromSymbolValues` are optional. They provide a bi-directional translation between UI Fields and symbol values. If the fields are the same, they don't need to be defined.

#### UIField

A UIField is an Object that contains information of UIField name, type, domains, subdomains, expression.
```
{
  "name" : "...", //string
  "type" : "...", //string. Possible values: text, expression, coded-value-domain(default), inherit(Depends on parent field. Not processed at the beginning) or group. If type is "expression", the value will be caculated based on the script. The scripts take a $feature which represents the other UI Fields' values. e.g. "sidc" in military symbol.
  "default": "...", //string or number
  "domain": "$domains.domainName", // Optional. Only used when type is coded-value-domain. A reference to the domains property. "domainName" should be a key of the "domains" dictionary.
  "subdomains": { //Optional. Defines subdomains(fields depend on it based on the value of current domain). Only when domain is specified and it has fields depend on it.
       "code": [...] // array of UIFields
  }, 
  "expression": "..." string // the expression if type is "expression",
  "uiFields": [...] //Array of UIField if group is specified.
}
```
A subdomain defines the fields depend of the current UI fields. It is a dictionary type that has the code(from coded value domain) as the key,
and an array of UIField as the value. In the app, it will be renderered recursively if multiple levels of dependencies are present.
