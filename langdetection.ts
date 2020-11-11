const localLang: string = window.navigator.language;
const favLangs = window.navigator.languages;

function isGer(lang: string): boolean {
    console.log(lang);
    const gerLangCodes = ['wen-DE', 'de-DE', 'gsw', 'de', 'de-CH', 'de-AT', 'de-LU', 'de-LI'];
    return gerLangCodes.indexOf(lang) > 0;
}

console.log(isGer(localLang));
