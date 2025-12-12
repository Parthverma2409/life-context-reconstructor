export function parseTextMessages(raw: any): { messages: string[] } {
  if (!raw) return { messages: [] };
  if (raw.messages && Array.isArray(raw.messages)) return { messages: raw.messages.map((m: any)=> typeof m === 'string'? m : m.text || '') };
  if (typeof raw === 'string') return { messages: raw.split('\n').filter(Boolean) };
  return { messages: [] };
}
