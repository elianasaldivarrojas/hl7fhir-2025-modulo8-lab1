https://hapi.fhir.org/baseR5/Encounter?patient=Patient/794334


/*Respuesta de la consulta */
{
    "resourceType": "Bundle",
    "id": "4cab02dd-82ab-40fd-bdc2-6cecfa939b2a",
    "meta": {
        "lastUpdated": "2025-09-15T23:33:23.381+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "https://hapi.fhir.org/baseR5/Encounter?patient=Patient%2F794334"
        }
    ],
    "entry": [
        {
            "fullUrl": "https://hapi.fhir.org/baseR5/Encounter/794338",
            "resource": {
                "resourceType": "Encounter",
                "id": "794338",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2025-04-29T02:46:56.957+00:00",
                    "source": "#8t2yu7zImFVTdf4N"
                },
                "status": "in-progress",
                "subject": {
                    "reference": "Patient/794334"
                }
            },
            "search": {
                "mode": "match"
            }
        }
    ]
}