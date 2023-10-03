import { faker } from "@faker-js/faker";
import * as usersRepository from "../../src/users-repository";
import { getInfractionsFrom } from "infractions-service";
import { User } from "@prisma/client";

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const userData: User = {
      id: 1,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      licenseId: '111.111.11.11'
    };
    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce((): any => {
      return { userData };
    });

    const infractions = await getInfractionsFrom('111.111.11.11');
    expect(infractions).toEqual({
      userData, 
      infractions: []
    })
  });

  it("should throw an error when driver license does not exists", () => {
    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce((): any => {
      return undefined;
    });
    const promise = getInfractionsFrom('1');
    expect(promise).rejects.toEqual({ 
      type: "NOT_FOUND", 
      message: "Driver not found." 
    });
  })
});