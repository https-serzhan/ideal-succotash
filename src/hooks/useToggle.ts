import { useState,useCallback } from 'react';

export const useToggle = (init : boolean = false) => {
    const [value, setValue] = useState<boolean>(init);
    const toggle = useCallback(() => {
        setValue((value) => !value);
    }, []);

    return [value, toggle] as const;
}