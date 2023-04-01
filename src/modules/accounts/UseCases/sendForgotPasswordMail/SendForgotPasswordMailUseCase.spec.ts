import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      userRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendEmail");

    await userRepositoryInMemory.create({
      driver_license: "217080",
      email: "hatgisok@zokolpow.ax",
      name: "Philip Stewart",
      password: "12345",
    });

    await sendForgotPasswordMailUseCase.execute("hatgisok@zokolpow.ax");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists!", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("asfuhuf@kf.gr")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    await userRepositoryInMemory.create({
      driver_license: "21708024",
      email: "dutaosgisok@zokolpow.ax",
      name: "Laipin Stewart",
      password: "123455767",
    });

    await sendForgotPasswordMailUseCase.execute("dutaosgisok@zokolpow.ax");

    expect(generateTokenMail).toBeCalled();
  });
});
