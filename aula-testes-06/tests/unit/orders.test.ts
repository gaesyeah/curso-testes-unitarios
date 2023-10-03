import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderData: OrderInput = {
      client: 'gabriel',
      description: 'teste'
    };
    const order = await createOrder(orderData);
    expect(order).toEqual({
      protocol: expect.any(String),
      status: "IN_PREPARATION"
    });
  });

  it("should return an order based on the protocol", async () => {
    const protocolData: {
      protocol: string,
      status: string
    } = {
      protocol: new Date().getTime().toString(),
      status: "IN_PREPARATION"
    };
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any => {
      return protocolData
    });
    const order = await getOrderByProtocol(protocolData.protocol);
    expect(order).toEqual(protocolData);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    const nonExistentProtocol = '99999999';
    const order = await getOrderByProtocol(nonExistentProtocol);
    expect(order).toEqual({ 
      protocol: nonExistentProtocol,
      status: 'INVALID' 
    });
  });
});