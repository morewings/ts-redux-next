import { useSelector } from 'react-redux';

import type { UserInfo, State } from './UsersReducer';

export const useList = () => useSelector<{ users: State }>(state => state.users.list);

export const useInfo = (userId?: string): UserInfo => {
    if (!userId) {
        throw new Error('No user id provided to selector!');
    }
    const userInfo = useSelector<{ users: State }>(state => state.users.selectedUser) as UserInfo;
    return userInfo;
};
