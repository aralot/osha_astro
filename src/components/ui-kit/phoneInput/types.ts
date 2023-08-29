import { IInputProps } from '../input';

export interface IPhoneInputProps extends Omit<IInputProps, 'onChange'> {
  onChange(value: string): void;
}
