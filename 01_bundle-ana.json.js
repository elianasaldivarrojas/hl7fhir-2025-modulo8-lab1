https://hapi.fhir.org/baseR5/?Content-Type=application/fhir+json/@bundle-ana.json

{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:patient-ana",
      "resource": {
        "resourceType": "Patient",
        "id": "patient-ana",
        "name": [
          {
            "use": "official",
            "family": "Perez",
            "given": ["Ana"]
          }
        ],
        "gender": "female",
        "birthDate": "1991-03-14"
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "fullUrl": "urn:uuid:encounter-ana",
      "resource": {
        "resourceType": "Encounter",
        "id": "encounter-ana",
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "AMB",
          "display": "ambulatory"
        },
        "subject": {
          "reference": "urn:uuid:patient-ana"
        },
        "period": {
          "start": "2025-09-01T09:00:00Z",
          "end": "2025-09-01T09:30:00Z"
        }
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    },
    {
      "fullUrl": "urn:uuid:obs-pressure",
      "resource": {
        "resourceType": "Observation",
        "id": "obs-pressure",
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "vital-signs",
                "display": "Vital Signs"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "85354-9",
              "display": "Blood pressure panel"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:patient-ana"
        },
        "encounter": {
          "reference": "urn:uuid:encounter-ana"
        },
        "effectiveDateTime": "2025-09-01T09:10:00Z",
        "component": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8480-6",
                  "display": "Systolic blood pressure"
                }
              ]
            },
            "valueQuantity": {
              "value": 120,
              "unit": "mmHg",
              "system": "http://unitsofmeasure.org",
              "code": "mm[Hg]"
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8462-4",
                  "display": "Diastolic blood pressure"
                }
              ]
            },
            "valueQuantity": {
              "value": 80,
              "unit": "mmHg",
              "system": "http://unitsofmeasure.org",
              "code": "mm[Hg]"
            }
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    },
    {
      "fullUrl": "urn:uuid:obs-glucose",
      "resource": {
        "resourceType": "Observation",
        "id": "obs-glucose",
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "laboratory",
                "display": "Laboratory"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2339-0",
              "display": "Glucose [Mass/volume] in Blood"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:patient-ana"
        },
        "encounter": {
          "reference": "urn:uuid:encounter-ana"
        },
        "effectiveDateTime": "2025-09-01T09:15:00Z",
        "valueQuantity": {
          "value": 90,
          "unit": "mg/dL",
          "system": "http://unitsofmeasure.org",
          "code": "mg/dL"
        }
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}


/*Respuesta  200 ok */
{
    "resourceType": "Bundle",
    "id": "a5da55fe-092b-4fa3-8193-d46bb6536c9f",
    "type": "transaction-response",
    "link": [
        {
            "relation": "self",
            "url": "https://hapi.fhir.org/baseR5"
        }
    ],
    "entry": [
        {
            "response": {
                "status": "201 Created",
                "location": "Patient/810085/_history/1",
                "etag": "1",
                "lastModified": "2025-09-15T23:34:38.687+00:00",
                "outcome": {
                    "resourceType": "OperationOutcome",
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Patient/810085/_history/1&quot;. Took 15ms.</td></tr></table></div>"
                    },
                    "issue": [
                        {
                            "severity": "information",
                            "code": "informational",
                            "details": {
                                "coding": [
                                    {
                                        "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                                        "code": "SUCCESSFUL_CREATE",
                                        "display": "Create succeeded."
                                    }
                                ]
                            },
                            "diagnostics": "Successfully created resource \"Patient/810085/_history/1\". Took 15ms."
                        }
                    ]
                }
            }
        },
        {
            "response": {
                "status": "201 Created",
                "location": "Encounter/810086/_history/1",
                "etag": "1",
                "lastModified": "2025-09-15T23:34:38.687+00:00",
                "outcome": {
                    "resourceType": "OperationOutcome",
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Encounter/810086/_history/1&quot;. Took 1ms.</td></tr></table></div>"
                    },
                    "issue": [
                        {
                            "severity": "information",
                            "code": "informational",
                            "details": {
                                "coding": [
                                    {
                                        "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                                        "code": "SUCCESSFUL_CREATE",
                                        "display": "Create succeeded."
                                    }
                                ]
                            },
                            "diagnostics": "Successfully created resource \"Encounter/810086/_history/1\". Took 1ms."
                        }
                    ]
                }
            }
        },
        {
            "response": {
                "status": "201 Created",
                "location": "Observation/810087/_history/1",
                "etag": "1",
                "lastModified": "2025-09-15T23:34:38.687+00:00",
                "outcome": {
                    "resourceType": "OperationOutcome",
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Observation/810087/_history/1&quot;. Took 3ms.</td></tr></table></div>"
                    },
                    "issue": [
                        {
                            "severity": "information",
                            "code": "informational",
                            "details": {
                                "coding": [
                                    {
                                        "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                                        "code": "SUCCESSFUL_CREATE",
                                        "display": "Create succeeded."
                                    }
                                ]
                            },
                            "diagnostics": "Successfully created resource \"Observation/810087/_history/1\". Took 3ms."
                        }
                    ]
                }
            }
        },
        {
            "response": {
                "status": "201 Created",
                "location": "Observation/810088/_history/1",
                "etag": "1",
                "lastModified": "2025-09-15T23:34:38.687+00:00",
                "outcome": {
                    "resourceType": "OperationOutcome",
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Observation/810088/_history/1&quot;. Took 2ms.</td></tr></table></div>"
                    },
                    "issue": [
                        {
                            "severity": "information",
                            "code": "informational",
                            "details": {
                                "coding": [
                                    {
                                        "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                                        "code": "SUCCESSFUL_CREATE",
                                        "display": "Create succeeded."
                                    }
                                ]
                            },
                            "diagnostics": "Successfully created resource \"Observation/810088/_history/1\". Took 2ms."
                        }
                    ]
                }
            }
        }
    ]
}