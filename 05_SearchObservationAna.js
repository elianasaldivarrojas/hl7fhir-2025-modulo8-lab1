https://hapi.fhir.org/baseR5/Observation?subject=Patient/810085

/*Resultado de la consulta */
{
    "resourceType": "Bundle",
    "id": "a17a6109-079a-4f40-b929-beb2a4124c0a",
    "meta": {
        "lastUpdated": "2025-09-16T22:15:42.485+00:00"
    },
    "type": "searchset",
    "total": 2,
    "link": [
        {
            "relation": "self",
            "url": "https://hapi.fhir.org/baseR5/Observation?subject=Patient%2F810085"
        }
    ],
    "entry": [
        {
            "fullUrl": "https://hapi.fhir.org/baseR5/Observation/810087",
            "resource": {
                "resourceType": "Observation",
                "id": "810087",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2025-09-15T23:34:38.687+00:00",
                    "source": "#RDSXWSc36T25qAxW"
                },
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
                    "reference": "Patient/810085"
                },
                "encounter": {
                    "reference": "Encounter/810086"
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
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://hapi.fhir.org/baseR5/Observation/810088",
            "resource": {
                "resourceType": "Observation",
                "id": "810088",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2025-09-15T23:34:38.687+00:00",
                    "source": "#RDSXWSc36T25qAxW"
                },
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
                    "reference": "Patient/810085"
                },
                "encounter": {
                    "reference": "Encounter/810086"
                },
                "effectiveDateTime": "2025-09-01T09:15:00Z",
                "valueQuantity": {
                    "value": 90,
                    "unit": "mg/dL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            },
            "search": {
                "mode": "match"
            }
        }
    ]
}