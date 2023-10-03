import calculator from "calculator";
import { MathBody } from "../../src/validator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 2,
      n2: 2
    };

    const sum = calculator.sum(mathBody.n1, mathBody.n2);
    expect(sum).toBe(4);
  });

  it("should subtract two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sub",
      n1: 2,
      n2: 2
    };

    const sub = calculator.sub(mathBody.n1, mathBody.n2);
    expect(sub).toBe(0);
  });
  it("should multiply two numbers", async () => {
    const mathBody: MathBody = {
      operation: "mul",
      n1: 3,
      n2: 3
    };

    const mul = calculator.mul(mathBody.n1, mathBody.n2);
    expect(mul).toBe(9);
  });

  it("should divide two numbers", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 2
    };

    const div = calculator.div(mathBody.n1, mathBody.n2);
    expect(div).toBe(1);
  });

  it("should return 0 when diving by zero", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 0
    };

    const div = calculator.div(mathBody.n1, mathBody.n2);
    expect(div).toBe(0);
  });
})