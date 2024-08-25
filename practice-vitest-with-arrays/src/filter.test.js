import { describe, it, expect } from "vitest";
import { posts } from "./data";

describe("filter method - simple", () => {
  it("gets positive numbers", () => {
    const numbers = [1, -2, 3, -4, 5];

    const positiveNumbers = numbers.filter((num) => num > 0);
    expect(positiveNumbers).toEqual([1, 3, 5]);
  });

  it("gets employees in Sales department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Sales" },
    ];

    const salesEmployees = employees.filter(
      (employee) => employee.department === "Sales"
    );
    expect(salesEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jim", age: 40, department: "Sales" },
    ]);
  });

  it("gets employees over 35 in Marketing department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const salesEmployeesOver35 = employees.filter(
      (employee) => employee.department === "Marketing" && employee.age >= 35
    );
    expect(salesEmployeesOver35).toEqual([
      { name: "Jim", age: 40, department: "Marketing" },
    ]);
  });

  it("gets employees in Sales or Development department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const targetDepartments = ["Sales", "Development"];
    const targetDepartmentsSet = new Set(targetDepartments);

    const salesOrDevEmployees = employees.filter((employee) =>
      targetDepartmentsSet.has(employee.department)
    );
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });
});

describe("filter method - real world", () => {
  it("gets posts from this year", () => {
    const postsThisYear = posts.filter(
      (post) => new Date(post.meta.created_at).getFullYear() === 2024
    );
    expect(postsThisYear.length).toBe(10);
  });

  it('gets posts with "culture" tag', () => {
    const postsWithCultureTag = posts.filter((post) =>
      post.meta.tags.includes("culture")
    );
    expect(postsWithCultureTag.length).toBe(16);
  });

  it("gets tweets posted after 10pm", () => {
    const tweetsPostedAfter10pm = posts.filter((post) => {
      const krTimeStamp = new Date(post.meta.created_at).toLocaleString(
        "kr-KR"
      );
      return new Date(krTimeStamp).getHours() >= 22;
    });
    expect(tweetsPostedAfter10pm.length).toBe(4);
  });
});
