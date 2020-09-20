export interface IData {
    data: any
}

export interface IMessageType {
    role: string;
    key: MessageTypes;
    cmd: string;
    description: string;
}

export type MessageTypes = 'USER_CHECKED_IN' | 'USER_CHECKED_OUT';

export const MessageTypes: Record<MessageTypes, IMessageType> = {
    USER_CHECKED_IN: {
        key: 'USER_CHECKED_IN',
        cmd: 'users.check_in',
        description: 'User has checked in.',
        role: '',
    },
    USER_CHECKED_OUT: {
        key: 'USER_CHECKED_OUT',
        cmd: 'users.check_out',
        description: 'User has checked out.',
        role: '',
    },
}

export interface IMessageData extends IData {
    timestamp: Date
}