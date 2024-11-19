import { forwardRef, HTMLAttributes } from 'react';
import { Label } from '../../atoms/label/index';
import { Textarea } from '../../atoms/textArea/index';
import { cn } from '@/shared/utils/cn';

type TextareaWithLabelProps = HTMLAttributes<HTMLTextAreaElement> & {
  text: string;
  label: string;
  placeholder: string;
  rootClassName: string;
  labelClassName: string;
  textareaClassName: string;
};

const TextareaWithText = forwardRef<
  HTMLTextAreaElement,
  TextareaWithLabelProps
>(
  (
    {
      text,
      label,
      placeholder,
      rootClassName,
      labelClassName,
      textareaClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('grid w-full gap-1.5', rootClassName)}>
        <Label htmlFor="message" className={labelClassName}>
          {label}
        </Label>
        <Textarea
          ref={ref}
          className={textareaClassName}
          placeholder={placeholder}
          id="message"
          {...props}
        />
        <p className="text-sm text-content-shape-quaternary">{text}</p>
      </div>
    );
  },
);

TextareaWithText.displayName = 'TextareaWithText';

export { TextareaWithText };
