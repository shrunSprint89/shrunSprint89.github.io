import { flatten } from "flat";
import labels_en from "../resources/labels_en.json";
import { Details } from "../interfaces/ContentTypes";
export class LabelUtil {
  private readonly labels_en: { [key: string]: string | Details[] } = flatten(
    labels_en,
    {
      safe: true,
    }
  );
  private readonly labels_en_map = new Map<string, string | Details[]>(
    Object.entries(this.labels_en)
  );
  public getLabel(key: string): string {
    return Object.keys(this.labels_en)
      .filter((k) => k.includes(key))
      .map((k) => {
        let label = this.labels_en_map.get(k);
        if (typeof label !== "string") {
          label = "";
        }
        return label;
      })[0];
  }
  public getDetails(key: string): Details[] {
    return Object.keys(this.labels_en)
      .filter((k) => k.includes(key))
      .map((k) => {
        if (!k.includes("details")) {
          k = k.concat(".details");
        }
        let details = this.labels_en_map.get(k);
        if (typeof details !== "object") {
          details = [];
        }
        return details;
      })[0];
  }
}
