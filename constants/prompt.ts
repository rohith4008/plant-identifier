export const PROMPT = `
Identify the plant in this image and return the following information in strict JSON format:
- name (common name)
- scientificName
- family
- nativeRegion
- description (a brief description of the plant)
- isMedicinal (true or false)
- medicinalValue (only if isMedicinal is true)
`;
