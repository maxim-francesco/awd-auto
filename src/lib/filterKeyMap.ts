/**
 * Helper to map frontend activeFilters keys/values to backend query parameters.
 * 
 * Mapping Reference (Frontend Key -> Backend Query Parameter):
 * - Marca -> make
 * - Combustibil -> fuelType
 * - Cutie_de_viteze -> gearbox
 * - Caroserie -> bodyType
 * - Culoare -> color
 * - TVA_deductibil -> vatDeductible (sends "true" / "false")
 * - An_min -> yearMin
 * - An_max -> yearMax
 * - Pret_min -> priceMin
 * - Pret_max -> priceMax
 * - Any other key (e.g. Model, Tractiune) -> attr_<name_with_spaces_restored>
 */

const KEY_MAP: Record<string, string> = {
  Marca: "make",
  Combustibil: "fuelType",
  Cutie_de_viteze: "gearbox",
  Caroserie: "bodyType",
  Culoare: "color",
  TVA_deductibil: "vatDeductible",
  An_min: "yearMin",
  An_max: "yearMax",
  Pret_min: "priceMin",
  Pret_max: "priceMax",
};

export function buildFilterParams(
  activeFilters: Record<string, any>,
  params: URLSearchParams
): void {
  if (!activeFilters || typeof activeFilters !== "object") {
    return;
  }

  for (const key in activeFilters) {
    const value = activeFilters[key];

    // Skip empty values
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      continue;
    }

    // Determine the mapped key
    const mappedKey = KEY_MAP[key] || `attr_${key.replace(/_/g, " ")}`;

    // Append to URLSearchParams
    if (mappedKey === "vatDeductible") {
      params.append(mappedKey, value ? "true" : "false");
    } else if (Array.isArray(value)) {
      // TODO: Verify if the backend expects repeated keys for multi-value structured parameters
      value.forEach((v) => {
        if (v !== undefined && v !== null && v !== "") {
          params.append(mappedKey, v.toString());
        }
      });
    } else {
      params.append(mappedKey, value.toString());
    }
  }
}
