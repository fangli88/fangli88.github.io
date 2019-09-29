## Dictionary symbol stlyes definition

/resources/styles/dictionary-info.json
```
{
    "cimRefTemplateUrl": "./resources/styles/cim/{itemName}.json", //This line tells dictionary render where to find each symbol item.
    "itemsNames": [
          "Fuel_BD",
          "Fuel_CNG",
          "Fuel_ELEC",
          "Fuel_E85",
          "Fuel_HY",
          "Fuel_LNG",
          "Fuel_LPG",
          "Con_CHADEMO",
          "Con_J1772",
          "Con_NEMA515",
          "Con_NEMA520",
          "Con_NEMA1450",
          "Con_J1772COMBO",
          "Con_TESLA",
          "Aerovironment Network",
          "Blink Network",
          "ChargePoint Network",
          "Electric Circuit",
          "FLO",
          "GE WattStation",
          "Greenlots",
          "NRG",
          "OpConnect",
          "SemaCharge Network",
          "Electric_1",
          "Tesla",
          "Volta",
          "Label",
          "eVgo Network",
          "EV Connect"
     ],
     "authoringInfo": {
          "configuration": [
                  {
                      "name": "show_label",
                      "value": "true",
                      "domain": [
                            "true",
                            "false"
                      ],
                      "info": "indicates if the label should show"
                  }
            ],
      "symbol": [
                    "fuel_type",
                    "connector_types",
                    "network"
                ],
      "text": [
                  "name"
             ]
      },
      "expression": "\n// fuel type\nvar keys = 'Fuel_' + $feature.fuel_type;\n\n// network logo\nif (count($feature.network) > 0) {\n  keys += ';';\n  keys += $feature.network;\n  keys += ';po:network|OffsetX|-18';\n  keys += ';po:network|OffsetY|8';\n}\n\n// connectors\nif (count($feature.connector_types) > 0) {\nvar offset = 24;\n  var types = split($feature.connector_types, ' ');\n  for (var t in types) {\n    keys += ';Con_';\n    keys += types[t];\n    keys += ';po:' + types[t] + '|OffsetX|' + offset;\n    keys += ';po:' + types[t] + '|OffsetY|8';\n    offset += 18;\n  }\n}\n\n// labels\nif ($config.show_label == 'true') {\n  keys += ';Label';\n}\n\nreturn keys;"
}
```