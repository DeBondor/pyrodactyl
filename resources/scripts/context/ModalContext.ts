import { SettableModalProps } from '@/hoc/asModal';
import { createContext } from 'react';

export interface ModalContextValues {
    dismiss: () => void;
    setPropOverrides: (
        value:
            | ((current: Readonly<Partial<SettableModalProps>>) => Partial<SettableModalProps>)
            | Partial<SettableModalProps>
            | null
    ) => void;
}

const ModalContext = createContext<ModalContextValues>({
    dismiss: () => null,
    setPropOverrides: () => null,
});

ModalContext.displayName = 'ModalContext';

export default ModalContext;
