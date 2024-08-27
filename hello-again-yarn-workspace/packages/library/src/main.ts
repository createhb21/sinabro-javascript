class SubsetsOfJQuery {
  private elements: Element[];

  constructor(selector: string) {
    this.elements = Array.from(document.querySelectorAll(selector));
  }

  length() {
    return this.elements.length;
  }
}

export const $ = (selector: string) => {
  return new SubsetsOfJQuery(selector);
};
