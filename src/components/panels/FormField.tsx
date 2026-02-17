import type { InputHTMLAttributes, CSSProperties } from 'react';
import { clsx } from 'clsx';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

const INPUT_V2_STYLE: CSSProperties = {
  boxSizing: 'border-box',
  padding: '8px 12px 13px',
  gap: '8px',
  width: '100%',
  minHeight: '47px',
  background: 'rgba(255, 255, 255, 0.07)',
  border: '1px solid rgba(233, 236, 246, 0.07)',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  isolation: 'isolate',
};

const LABEL_STYLE: CSSProperties = {
  fontFamily: "'Onest', sans-serif",
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  color: 'rgba(255, 255, 255, 0.65)',
  width: '100%',
  margin: 0,
  flex: 'none',
  alignSelf: 'stretch',
};

const VALUE_STYLE: CSSProperties = {
  fontFamily: "'Onest', sans-serif",
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  color: '#FFFFFF',
  width: '100%',
  margin: 0,
  padding: 0,
  flex: 'none',
  alignSelf: 'stretch',
};

export const FormField = ({ label, id, error, className, ...inputProps }: FormFieldProps) => (
  <div
    className={clsx(
      'overflow-hidden transition-shadow duration-150 flex-none self-stretch grow-0',
      'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-panel',
      error && 'ring-2 ring-red-500/50',
      className
    )}
    style={INPUT_V2_STYLE}
  >
    <label htmlFor={id} style={LABEL_STYLE}>
      {label}
    </label>
    <input
      id={id}
      className="w-full bg-transparent border-0 placeholder:text-text-secondary placeholder:opacity-80 focus:outline-none"
      style={VALUE_STYLE}
      {...inputProps}
    />
    {error && (
      <p className="mt-0 text-xs text-red-400" style={{ margin: 0, padding: 0 }}>
        {error}
      </p>
    )}
  </div>
);
