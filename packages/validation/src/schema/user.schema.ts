import { Type, type Static } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object({
    name: Type.String({ minLength: 2 }),
    surname: Type.String({ minLength: 3}),
    email: Type.String({ format: "email" }),
    bornDate: Type.Date(),
    password: Type.String({ minLength: 8})
});

export type CreateUserInput = Static< typeof CreateUserSchema >;

export const LoginUserSchema = Type.Object({
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 8})
});

export type LoginUserInput = Static < typeof LoginUserSchema >