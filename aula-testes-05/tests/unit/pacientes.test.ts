import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => { return "valor simulado no mock" }
  }
});

describe("protocol generator tests", () => {
  it("should return a protocol", async () => {
    const protocolData :
    {
      name: string,
      lastName: string,
      priority: boolean
    } = {
      name: 'gabriel',
      lastName: 'goes',
      priority: true
    };

    const protocol = generateProtocolForPacient(protocolData.name, protocolData.lastName, protocolData.priority);
    console.log(protocol);
    expect(protocol).toEqual({
      priority: protocolData.priority,
      date: expect.any(Date),
      pacient: `${protocolData.name} ${protocolData.lastName}`,
      protocol: expect.any(String),
    });
  });
});