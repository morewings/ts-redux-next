import { useCallback } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

import type { UserInfo } from './UsersReducer';

export const useAddQuery = () => {
    return useCallback((userInfo: Omit<UserInfo, 'id'>) => {
        axios.post('http://localhost:3001/users/', { id: uniqid, ...userInfo });
    }, []);
};
