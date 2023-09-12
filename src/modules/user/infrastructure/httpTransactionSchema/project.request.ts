import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        email: z.string().nonempty('email es requerido'),
        password: z.string().nonempty('password es requerido'),
        username: z.string().nonempty('username es requerido'),
        category: z.number().nonnegative('username es requerido'),
    }),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>['body'];
