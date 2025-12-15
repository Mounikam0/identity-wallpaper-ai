export function buildPrompt(role, mindset, tone, device) {
    return `
  A calm, premium wallpaper designed for a ${role}.
  The image should feel ${mindset}, visually quiet, and mentally relaxing.
  Use a ${tone} color palette with soft gradients and gentle lighting.
  The composition should be minimal, balanced, and uncluttered.
  Nothing dramatic, nothing distracting.
  Feels modern, refined, and suitable for long work hours.
  No text, no symbols, no sharp contrasts, no visual noise.
  `.trim();
  }
  