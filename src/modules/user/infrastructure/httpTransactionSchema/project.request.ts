import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        email: z.string().nonempty('email es requerido').email('email no es valido'),
        password: z
            .string()
            .nonempty('password es requerido')
            .min(4, 'password debe tener al menos 4 caracteres'),
        username: z
            .string()
            .nonempty('username es requerido')
            .min(4, 'username debe tener al menos 4 caracteres'),
        category: z
            .number({ invalid_type_error: 'La categoria debe ser un número.' })
            .nonnegative('No puede ser un número negativo'),
    }),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>['body'];
