import { Input } from '../../atoms/input/input';
import { Label } from '../../atoms/label';
import { forwardRef, HTMLAttributes } from 'react';

type InputWithLabelProps = HTMLAttributes<HTMLInputElement> & {
  label: string;
  classNameLabel: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, classNameLabel, ...props }, ref) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className={classNameLabel}>
          {label}
        </Label>
        <Input
          ref={ref}
          type="email"
          id="email"
          placeholder="Email"
          {...props}
        />
      </div>
    );
  },
);

InputWithLabel.displayName = 'InputWithLabel';

export { InputWithLabel };
