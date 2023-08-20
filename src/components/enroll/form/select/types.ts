interface IOption {
  label: string;
  value: string;
}

export interface ISelectProps {
  placeholder: string;
  options: IOption[];
  value: string;
  onChange(value: string): void;
  onFocus(): void;
  isDisabled: boolean;
  isTwoColumn?: boolean;
}
