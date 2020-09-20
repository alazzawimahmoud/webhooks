export interface IData {
    [key: string]: any;
}

export interface IMessageType {
        role: string;
        key: string;
        cmd: string;
        description: string;
}

export type MessageTypes = 'USER_CHECKED_IN' | 'USER_CHECKED_OUT';

export const MessageTypes: Record<MessageTypes, IMessageType>= {
    USER_CHECKED_IN: {
        key: 'user_check_in',
        cmd: 'users.check_in',
        description: 'User has checked in.',
        role: '',
    },
    USER_CHECKED_OUT: {
        key: 'user_check_out',
        cmd: 'users.check_out',
        description: 'User has checked out.',
        role: '',
    },
}

export interface IMessageData extends IData {
    timestamp: Date
}