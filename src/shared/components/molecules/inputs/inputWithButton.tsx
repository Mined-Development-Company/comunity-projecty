import { Input } from '../../atoms/input/input';
import { Button } from '../../atoms/button';
import { forwardRef, HTMLAttributes } from 'react';
import { DivInput } from '../../atoms/input/components/divInput';

type InputWithButtonProps = HTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  buttonLabel: string;
  buttonProps: HTMLAttributes<HTMLButtonElement>;
};

const InputWithButton = forwardRef<HTMLInputElement, InputWithButtonProps>(
  ({ buttonLabel, placeholder, buttonProps, ...props }, ref) => {
    return (
      <DivInput className="flex">
        <Input ref={ref} type="email" placeholder={placeholder} {...props} />
        <Button type="submit" {...buttonProps}>
          {buttonLabel}
        </Button>
      </DivInput>
    );
  },
);

InputWithButton.displayName = 'InputWithButton';

export { InputWithButton };