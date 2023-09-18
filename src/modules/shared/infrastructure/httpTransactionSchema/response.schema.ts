import { z } from 'zod';

export const plainResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({}),
});

export const loginResponseSchema = z.object({
    data: z.object({
        user: z.array(z.object({})),
        role: z.string(),
        token: z.string(),
    }),
});

export const standar = {
    success: true,
    message: 'User logged in successfully',
    data: {},
};

export const loginResponse = {
    success: true,
    message: 'User logged in successfully',
    data: {
        user: {
            id: 2,
        },
        role: 'client',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkNsaWVudCIsImVtYWlsIjoiY2xpZW50QGNsaWNrYXBwcy5jbyIsIm1vYmlsZSI6IjEyMzY1NDc4OSIsImltYWdlIjoiL2RlZmF1bHRfaW1hZ2UucG5nIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDc5MjU0MzIsImV4cCI6MTU1MDUxNzQzMn0.4Vyjd7BG7v8AFSmGKmIs4VM2FBw3gOLn97Qdf6U4jxU',
    },
};

export const getCollectionData = {
    success: true,
    message: 'Data found',
    data: {
        requests: [
            {
                id: 10,
            },
            {
                id: 8,
            },
        ],
        pagination: {
            current_page: 1,
            next_page: null,
            previous_page: null,
            total_pages: 1,
            per_page: 10,
            total_entries: 5,
        },
    },
};

export const postData = {
    success: true,
    message: 'Order 766013 Code has been Submitted successfully',
    data: {
        request: {
            id: 11,
        },
    },
};

export const putData = {
    success: true,
    message: 'Category updated successfully',
    data: {
        category: {
            id: 11,
        },
    },
};

export const deleteData = {
    success: true,
    message: 'Category deleted successfully',
    data: {},
};

export const failResponse = {
    success: false,
    message: 'Invalid email or password',
    error_code: 1308,
    data: {},
};

/**
10XX: Errores principales de la aplicación
    '1000': 'Error del servidor de la aplicación, por favor contacta al administrador' # Error global
    '1001': 'Headers faltantes'
    '1002': 'Parámetros faltantes'
    '1003': 'Offset o límite inválido'
    '1004': 'Configuración regional inválida'
    '1005': 'Zona horaria inválida'
    '1006': 'Has excedido el límite de solicitudes por minuto. Por favor, inténtalo nuevamente más tarde.'

11XX: Errores HTTP
    '1101': 'No autorizado'
    '1102': 'No autorizado para acceder'
    '1103': 'Entidad no procesable'
    '1104': 'Autenticación fallida'
    '1105': 'No encontrado'

12XX: Errores de autenticación
    '1201': 'Tu sesión ha caducado, por favor inicia sesión nuevamente' # Token caducado
    '1202': 'Tu sesión es inválida' # Error de verificación de JWT
    '1203': 'Tu sesión es inválida' # Error al decodificar el token JWT
    '1204': 'Tu token de sesión es inválido' # Token inválido
    '1205': 'No estás autorizado, por favor inicia sesión' # No estás autorizado, por favor inicia sesión
    '1206': 'Error de autenticación, usuario no encontrado' # Error de autenticación, usuario no encontrado

13XX: Errores de sesión
    '1301': 'Credenciales inválidas'
    '1302': 'Tipo de inicio de sesión inválido'
    '1303': 'Tipo social inválido'
    '1304': 'Error de inicio de sesión'
    '1305': 'Tu cuenta ha sido deshabilitada por el administrador.'
    '1306': 'Número de móvil inválido.'
    '1307': '¡Código de confirmación incorrecto! Inténtalo de nuevo.'
    '1308': 'Email o contraseña inválidos'
    '1309': 'Tu cuenta ya existe en la aplicación, por favor intenta iniciar sesión.'
    '1310': 'Tu solicitud es inválida o ha expirado, por favor inténtalo de nuevo.'
    '1311': 'No estás autorizado para acceder a esta aplicación'
    '1312': 'Un problema en el Servicio de Directorio Activo, por favor contacta al Administrador'
    '1313': 'Tu correo electrónico aún no ha sido confirmado, por favor confirma tu correo electrónico'
    '1314': 'El enlace de correo electrónico ha caducado'
    '1315': 'Tu cuenta no está activada. Por favor, verifica tu correo electrónico para activarla.'
    '1316': 'No puedes eliminar al usuario hasta que sus solicitudes hayan sido completadas o canceladas.'
    '1317': 'Este número ya ha sido registrado'
    '1318': 'Por favor, antes de iniciar sesión con una cuenta de Google, regístrate primero'
    '1319': 'Tu antiguo número de móvil es incorrecto'
    '1320': '¡El código de confirmación ha caducado! Inténtalo de nuevo'
    '1321': 'No puedes eliminar al proveedor hasta que haya completado o cancelado sus solicitudes.'
    '1322': 'Tu cuenta ha sido bloqueada por el Administrador. Por favor, contacta al administrador en support@laancare.com'

    data_found:                 'Datos encontrados'
    no_data_found:              'No se encontraron datos'
    not_found:                  'No encontrado'
    x_not_found:                '%{name} no encontrado/a'
    update_successfully:        'Actualizado exitosamente'
    x_update_successfully:      '%{name} actualizado/a exitosamente'
    created_successfully:       'Creado exitosamente'
    x_created_successfully:     '%{name} creado/a exitosamente'
    deleted_successfully:       'Eliminado exitosamente'
    x_deleted_successfully:     '%{name} eliminado/a exitosamente'
    request_submitted:          'La orden %{code} ha sido enviada exitosamente'
    orders_not_found:           'Aún no hay órdenes'

    data_found:             'Data found'
    no_data_found:          'No data found'
    not_found:              'Not found'
    x_not_found:            '%{name} not found!'
    update_successfully:    'Updated successfully'
    x_update_successfully:  '%{name} updated successfully'
    created_successfully:   'Created successfully'
    x_created_successfully: '%{name} created successfully'
    deleted_successfully:   'Deleted successfully'
    x_deleted_successfully: '%{name} deleted successfully'
    request_submitted:      'Order %{code} Code has been Submitted successfully'
    orders_not_found:       'No orders yet'

   */

export const handleResGetCollection = (objectData: []): object => {
    const status = 200;
    const data = {
        success: true,
        message: 'Los datos se obtuvieron correctamente.',
        data: {
            requests: objectData,
            pagination: {
                current_page: 1,
                next_page: null,
                previous_page: null,
                total_pages: 1,
                per_page: 10,
                total_entries: 5,
            },
        },
    };
    return { status, data };
};

export const handleResPost = (objectData: object): object => {
    const status = 201;
    const data = {
        success: true,
        message: `Se registro correctamente el recurso.`,
        data: {
            request: objectData,
        },
    };
    return { status, data };
};

export const handleResPut = (objectData: object): object => {
    const status = 201;
    const data = {
        success: true,
        message: 'El recurso se actualizo.',
        data: {
            category: objectData,
        },
    };
    return { status, data };
};

export const handleResDelete = (objectData: object): object => {
    const status = 200;
    const data = {
        success: true,
        message: 'Category deleted successfully',
        data: {},
    };
    return { status, data };
};

export const handleResFail = (objectData: object): object => {
    const status = 201;
    const data = {
        success: false,
        message: 'Invalid email or password',
        error_code: 1308,
        data: {},
    };

    return { status, data };
};
