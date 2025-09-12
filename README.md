
# Project Title

A brief description of what this project does and who it's for


## 🧪 Laboratorio: Creación y Consulta de Datos Clínicos en FHIR
🎯 Objetivos

Persistir múltiples recursos clínicos en un Bundle de tipo transaction.

Explorar consultas básicas (search) y relacionales en un servidor FHIR.

Reforzar la relación entre Patient, Encounter y Observation.

1. Persistencia inicial (Bundle transaction)

👉 Paso 1: Copia el siguiente JSON y guárdalo como bundle-ana.json.

```bash
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
```

👉 Paso 2: Envíalo al servidor HAPI FHIR con:

curl -X POST \
  -H "Content-Type: application/fhir+json" \
  -d @bundle-ana.json \
  http://localhost:8080/fhir


Si la transacción es exitosa, deberías recibir un 201 Created por cada recurso.

2. Consulta de datos
Ejercicio A: Buscar al paciente creado

Realiza una búsqueda por nombre:

GET http://localhost:8080/fhir/Patient?family=Perez&given=Ana


Pregunta para reflexionar:
👉 ¿Qué campos del recurso Patient puedes usar como criterios de búsqueda (ej. birthdate, gender)?

Ejercicio B: Verificar el Encounter de Ana

Lista los encuentros asociados al paciente:

GET http://localhost:8080/fhir/Encounter?patient=Patient/[ID_DEL_PACIENTE]


Reto extra:
📌 Cambia el status del Encounter a in-progress y vuelve a subirlo con PUT.

Ejercicio C: Consultar Observations

Encuentra todas las observaciones de Ana:

GET http://localhost:8080/fhir/Observation?subject=Patient/[ID_DEL_PACIENTE]


Filtra solo las de tipo presión arterial (loinc|85354-9):

GET http://localhost:8080/fhir/Observation?code=http://loinc.org|85354-9&subject=Patient/[ID_DEL_PACIENTE]




