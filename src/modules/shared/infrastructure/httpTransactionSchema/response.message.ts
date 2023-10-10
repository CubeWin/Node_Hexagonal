// * Crear enums en base a las siguiente listas

export const ERROR_MAIN = {
    // 10XX: Errores principales de la aplicación
    1000: {
        errorCode: 1000,
        message: 'Error del servidor de la aplicación, por favor contacta al administrador',
    },
    1001: { errorCode: 1001, message: 'Headers faltantes' },
    1002: { errorCode: 1002, message: 'Parámetros faltantes' },
    1003: { errorCode: 1003, message: 'Offset o límite inválido' },
    1004: { errorCode: 1004, message: 'Configuración regional inválida' },
    1005: { errorCode: 1005, message: 'Zona horaria inválida' },
    1006: {
        errorCode: 1006,
        message:
            'Has excedido el límite de solicitudes por minuto. Por favor, inténtalo nuevamente más tarde.',
    },
};

export const ERROR_HTTP = {
    // 11XX: Errores HTTP
    1101: { errorCode: 1101, message: 'No autorizado' },
    1102: { errorCode: 1102, message: 'No autorizado para acceder' },
    1103: { errorCode: 1103, message: 'Entidad no procesable' },
    1104: { errorCode: 1104, message: 'Autenticación fallida' },
    1105: { errorCode: 1105, message: 'No encontrado' },
};

export const ERROR_AUTH = {
    // 12XX: Errores de autenticación
    1201: {
        errorCode: 1201,
        message: 'Tu sesión ha caducado, por favor inicia sesión nuevamente',
    }, // Token caducado
    1202: { errorCode: 1202, message: 'Tu sesión es inválida' }, // Error de verificación de JWT
    1203: { errorCode: 1203, message: 'Tu sesión es inválida.' }, // Error al decodificar el token JWT
    1204: { errorCode: 1204, message: 'Tu token de sesión es inválido' }, // Token inválido
    1205: { errorCode: 1205, message: 'No estás autorizado, por favor inicia sesión' }, // No estás autorizado, por favor inicia sesión
    1206: { errorCode: 1206, message: 'Error de autenticación, usuario no encontrado' }, // Error de autenticación, usuario no encontrado
};

export const ERROR_SESSION = {
    // 13XX: Errores de sesión
    1301: { errorCode: 1301, message: 'Credenciales inválidas' },
    1302: { errorCode: 1302, message: 'Tipo de inicio de sesión inválido' },
    1303: { errorCode: 1303, message: 'Tipo social inválido' },
    1304: { errorCode: 1304, message: 'Error de inicio de sesión' },
    1305: { errorCode: 1305, message: 'Tu cuenta ha sido deshabilitada por el administrador.' },
    1306: { errorCode: 1306, message: 'Número de móvil inválido.' },
    1307: { errorCode: 1307, message: '¡Código de confirmación incorrecto! Inténtalo de nuevo.' },
    1308: { errorCode: 1308, message: 'Email o contraseña inválidos' },
    1309: {
        errorCode: 1309,
        message: 'Tu cuenta ya existe en la aplicación, por favor intenta iniciar sesión.',
    },
    1310: {
        errorCode: 1310,
        message: 'Tu solicitud es inválida o ha expirado, por favor inténtalo de nuevo.',
    },
    1311: { errorCode: 1311, message: 'No estás autorizado para acceder a esta aplicación' },
    1312: {
        errorCode: 1312,
        message:
            'Un problema en el Servicio de Directorio Activo, por favor contacta al Administrador',
    },
    1313: {
        errorCode: 1313,
        message:
            'Tu correo electrónico aún no ha sido confirmado, por favor confirma tu correo electrónico',
    },
    1314: { errorCode: 1314, message: 'El enlace de correo electrónico ha caducado' },
    1315: {
        errorCode: 1315,
        message:
            'Tu cuenta no está activada. Por favor, verifica tu correo electrónico para activarla.',
    },
    1316: {
        errorCode: 1316,
        message:
            'No puedes eliminar al usuario hasta que sus solicitudes hayan sido completadas o canceladas.',
    },
    1317: { errorCode: 1317, message: 'Este número ya ha sido registrado' },
    1318: {
        errorCode: 1318,
        message: 'Por favor, antes de iniciar sesión con una cuenta de Google, regístrate primero',
    },
    1319: { errorCode: 1319, message: 'Tu antiguo número de móvil es incorrecto' },
    1320: {
        errorCode: 1320,
        message: '¡El código de confirmación ha caducado! Inténtalo de nuevo',
    },
    1321: {
        errorCode: 1321,
        message:
            'No puedes eliminar al proveedor hasta que haya completado o cancelado sus solicitudes.',
    },
    1322: {
        errorCode: 1322,
        message:
            'Tu cuenta ha sido bloqueada por el Administrador. Por favor, contacta al administrador en support@laancare.com',
    },
};

// export enum ERR_MAIN { // 10XX: Errores principales de la aplicación
//     e1000 = 'Error del servidor de la aplicación, por favor contacta al administrador',
//     e1001 = 'Headers faltantes',
//     e1002 = 'Parámetros faltantes',
//     e1003 = 'Offset o límite inválido',
//     e1004 = 'Configuración regional inválida',
//     e1005 = 'Zona horaria inválida',
//     e1006 = 'Has excedido el límite de solicitudes por minuto. Por favor, inténtalo nuevamente más tarde.',
// }

// export enum ERR_HTTP { // 11XX: Errores HTTP
//     e1101 = 'No autorizado',
//     e1102 = 'No autorizado para acceder',
//     e1103 = 'Entidad no procesable',
//     e1104 = 'Autenticación fallida',
//     e1105 = 'No encontrado',
// }

// export enum ERR_AUTH { // 12XX: Errores de autenticación
//     e1201 = 'Tu sesión ha caducado, por favor inicia sesión nuevamente', // Token caducado
//     e1202 = 'Tu sesión es inválida', // Error de verificación de JWT
//     e1203 = 'Tu sesión es inválida.', // Error al decodificar el token JWT
//     e1204 = 'Tu token de sesión es inválido', // Token inválido
//     e1205 = 'No estás autorizado, por favor inicia sesión', // No estás autorizado, por favor inicia sesión
//     e1206 = 'Error de autenticación, usuario no encontrado', // Error de autenticación, usuario no encontrado
// }

// export enum ERR_SESSION { // 13XX: Errores de sesión
//     e1301 = 'Credenciales inválidas',
//     e1302 = 'Tipo de inicio de sesión inválido',
//     e1303 = 'Tipo social inválido',
//     e1304 = 'Error de inicio de sesión',
//     e1305 = 'Tu cuenta ha sido deshabilitada por el administrador.',
//     e1306 = 'Número de móvil inválido.',
//     e1307 = '¡Código de confirmación incorrecto! Inténtalo de nuevo.',
//     e1308 = 'Email o contraseña inválidos',
//     e1309 = 'Tu cuenta ya existe en la aplicación, por favor intenta iniciar sesión.',
//     e1310 = 'Tu solicitud es inválida o ha expirado, por favor inténtalo de nuevo.',
//     e1311 = 'No estás autorizado para acceder a esta aplicación',
//     e1312 = 'Un problema en el Servicio de Directorio Activo, por favor contacta al Administrador',
//     e1313 = 'Tu correo electrónico aún no ha sido confirmado, por favor confirma tu correo electrónico',
//     e1314 = 'El enlace de correo electrónico ha caducado',
//     e1315 = 'Tu cuenta no está activada. Por favor, verifica tu correo electrónico para activarla.',
//     e1316 = 'No puedes eliminar al usuario hasta que sus solicitudes hayan sido completadas o canceladas.',
//     e1317 = 'Este número ya ha sido registrado',
//     e1318 = 'Por favor, antes de iniciar sesión con una cuenta de Google, regístrate primero',
//     e1319 = 'Tu antiguo número de móvil es incorrecto',
//     e1320 = '¡El código de confirmación ha caducado! Inténtalo de nuevo',
//     e1321 = 'No puedes eliminar al proveedor hasta que haya completado o cancelado sus solicitudes.',
//     e1322 = 'Tu cuenta ha sido bloqueada por el Administrador. Por favor, contacta al administrador en support@laancare.com',
// }
