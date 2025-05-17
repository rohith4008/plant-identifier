export const PROMPT = `
Identify the plant in this image and respond with ONLY a JSON object matching this schema:

{
  "name": "",
  "scientificName": "",
  "family": "",
  "nativeRegion": "",
  "description": "",
  "isMedicinal": true | false,
  "medicinalValue": "" // Leave empty string if isMedicinal is false
}

Do not include any extra text or explanations. Only return valid JSON.
`.trim();
