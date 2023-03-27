import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  isSubmitting: boolean;
}

export default function Form({
  children,
  isSubmitting = false,
  ...rest
}: Props) {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <form className="flex flex-col justify-between h-full gap-2 pb-2" {...rest}>
      <div className="flex flex-col gap-2 pb-2">{children}</div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className={['btn btn-block', isSubmitting ? 'loading' : ''].join(' ')}
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-outline"
          disabled={isSubmitting}
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </form>
  );
}
