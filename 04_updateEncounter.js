https://hapi.fhir.org/baseR5/Encounter/794338


/*Actualización del estado del encounter */

{
  "resourceType": "Encounter",
  "id": "794338",
  "status": "in-progress",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "AMB",
    "display": "ambulatory"
  },
  "subject": {
    "reference": "Patient/794334"
  },
  "period": {
    "start": "2025-09-01T10:00:00Z",
    "end": "2025-09-01T10:30:00Z"
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system" : "http://loinc.org",
          "code" : "85354-9",
          "display" : "Blood pressure panel with all children optional"
        }
      ],
      "text" : "Blood pressure systolic & diastolic"
    }
  ]
}


/* Respuesta del encounter */

{
    "resourceType": "Encounter",
    "id": "794338",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2025-04-29T02:46:56.957+00:00"
    },
    "status": "in-progress",
    "subject": {
        "reference": "Patient/794334"
    }
}