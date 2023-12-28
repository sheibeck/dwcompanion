export const opanAiApiKeyStorageName="dungeonworldcompanion_apikey";

export function getApiKey() {
    return localStorage.getItem(opanAiApiKeyStorageName) ?? null;
}

export function setApiKey(value: string) {
    return localStorage.setItem(opanAiApiKeyStorageName, value);
}
