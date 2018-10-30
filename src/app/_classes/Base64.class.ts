
interface IBase {
      encode(name: string): string;
      decoding(encodename: string): string;
}

export class BaseSixtyFour implements IBase {

      constructor() {

      }
      encode(name: string): string {
            return btoa(name);

      }
      decoding(encodename: string): string {
            return atob(encodename);

      }

}