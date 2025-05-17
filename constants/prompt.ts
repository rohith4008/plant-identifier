export const PROMPT = `
Identify this plant and return the following information in JSON format:
- Plant name
- Scientific name
- Plant family
- Native region
- Brief description
- Is this a known medicinal plant? (yes/no)
- If yes, give its medicinal uses with scientific backing. 
If no, write "None" in medicinal value.
`.trim();
