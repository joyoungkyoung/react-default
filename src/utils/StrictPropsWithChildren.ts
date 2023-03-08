import { ReactNode } from 'react';

type StrictPropsWithChildren<P = unknown> = P & {
    children: ReactNode;
};

export default StrictPropsWithChildren;
