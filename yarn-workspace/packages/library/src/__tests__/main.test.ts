import { describe, it, expect, vi } from "vitest";
import { $ as subsetsOfJQuery } from "../main";

const $ = (selector: string, container: Element) => {
  if (!container) {
    throw new Error("specify container in test cases.");
  }
  return subsetsOfJQuery(selector, container);
};

describe("SubsetsOfJQuery", () => {
  it("does nothing", () => {
    expect(true).toBe(true);
  });

  describe("length()", () => {
    it("returns length correctly", () => {
      const div = document.createElement("div");
      div.innerHTML = `
      <button class="btn" type="button">button 1</button>
      <button class="btn" type="button">button 2</button>
      <button class="btn" type="button">button 3</button>
      <button class="btn" type="button">button 4</button>
      `;
      expect($(".btn", div).length()).toBe(4);
    });
  });

  describe("click()", () => {
    it("attaches click event listener correctly", () => {
      const div = document.createElement("div");
      div.innerHTML = `
      <button class="btn" type="button">button 1</button>
      <button class="btn" type="button">button 2</button>
      <button class="btn" type="button">button 3</button>
      <button class="btn" type="button">button 4</button>
      `;
      const handler = vi.fn();
      $(".btn", div).click(handler);

      (div.querySelectorAll(".btn")[0] as HTMLElement).click();
      expect(handler).toBeCalledTimes(1);
    });
  });
});
