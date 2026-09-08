// @polsia:shared — Permissions-Policy builder (single source, used by
// next.config.ts headers). Scaffold-faithful minimal restore: everything OFF
// by default; appCapabilities in next.user-config.ts opts features in.

export interface AppCapabilities {
  microphone: boolean;
  camera: boolean;
  geolocation: boolean;
}

const FEATURE_MAP: Record<keyof AppCapabilities, string> = {
  microphone: 'microphone',
  camera: 'camera',
  geolocation: 'geolocation',
};

export function buildPermissionsPolicy(capabilities: AppCapabilities): string {
  const parts: string[] = [];
  for (const [key, feature] of Object.entries(FEATURE_MAP) as Array<
    [keyof AppCapabilities, string]
  >) {
    parts.push(capabilities[key] ? `${feature}=(self)` : `${feature}=()`);
  }
  // browsing-topics stays hard-off (not configurable).
  parts.push('browsing-topics=()');
  return parts.join(', ');
}
