import { typeCategory, type UserEntity } from '../../../domain/user.entity';

export const USERS: UserEntity[] = [
    {
        id_user: '661d50b5-9346-4dc6-b327-8894bd266dd5',
        email: 'email01@smalltemp.ok',
        password: '$2a$10$bWiqdw6DM48iZAG9s2ciquystGzkBukeUAEqJb5jsHbau7uH0MQT2',
        username: 'manager',
        category: typeCategory.USER_ADMINISTRATOR,
    },
    {
        id_user: '64192721-3340-414b-ba69-dddb2ffc2307',
        email: 'email02@smalltemp.ok',
        password: '$2a$10$bWiqdw6DM48iZAG9s2ciquystGzkBukeUAEqJb5jsHbau7uH0MQT2',
        username: 'service01',
        category: typeCategory.USER_STANDAR,
    },
    {
        id_user: '17f366cb-89d2-4704-88e2-54abcdff6ccc',
        email: 'email03@smalltemp.ok',
        password: '$2a$10$bWiqdw6DM48iZAG9s2ciquystGzkBukeUAEqJb5jsHbau7uH0MQT2',
        username: 'service02',
        category: typeCategory.USER_STANDAR,
    },
    {
        id_user: '2c0a0c84-ad34-4764-941c-ffc7ad476985',
        email: 'email04@smalltemp.ok',
        password: '$2a$10$bWiqdw6DM48iZAG9s2ciquystGzkBukeUAEqJb5jsHbau7uH0MQT2',
        username: 'lector01',
        category: typeCategory.USER_LECTOR,
    },
    {
        id_user: '32642b31-beee-4b60-b5e5-53197f19291f',
        email: 'email05@smalltemp.ok',
        password: '$2a$10$bWiqdw6DM48iZAG9s2ciquystGzkBukeUAEqJb5jsHbau7uH0MQT2',
        username: 'lector02',
        category: typeCategory.USER_LECTOR,
    },
];
