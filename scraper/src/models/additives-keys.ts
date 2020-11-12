export enum AdditivesKeys {
  _language,
  dye,
  Preservative,
  Antioxidants,
  FlavorEnhancer,
  Sulphurized,
  Blackend,
  Waxed,
  Phosphate,
  Sweeteners,
  Phenylalanine,
}

const deAdditives: Record<AdditivesKeys, string> = {
  0: "de",
  1: "Farbstoff",
  2: "Konservierungsstoffe",
  3: "Antioxidationsmittel",
  4: "Geschmacksverstärker",
  5: "geschwefelt",
  6: "geschwärzt",
  7: "gewachst",
  8: "Phosphat",
  9: "Süßungsmitteln",
  10: "Phenylalaninquelle",
};

const engAdditives: Record<AdditivesKeys, string> = {
  0: "eng",
  1: "Farbstoff",
  2: "Konservierungsstoffe",
  3: "Antioxidationsmittel",
  4: "Geschmacksverstärker",
  5: "geschwefelt",
  6: "geschwärzt",
  7: "gewachst",
  8: "Phosphat",
  9: "Süßungsmitteln",
  10: "Phenylalaninquelle",
};
