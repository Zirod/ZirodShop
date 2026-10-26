import { Type, type Static } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object({
  name: Type.String({ minLength: 2 }),
  email: Type.String({ format: "email" }),
  age: Type.Optional(Type.Integer({ minimum: 1 })),
});

export type CreateUserInput = Static< typeof CreateUserSchema >;