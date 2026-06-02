import type {
  ContactFormData,
  ContactFormState,
  ContactFormErrors,
} from '../../types';
import InputField from './InputFieldCard';

interface Props {
  data: ContactFormData;
  form: ContactFormState;
  errors: ContactFormErrors;
  touched: Record<string, boolean>;
  onChange: (field: keyof ContactFormState) => (value: string) => void;
  onBlur: (field: keyof ContactFormErrors) => void;
}

export default function FormCard({
  data,
  form,
  errors,
  touched,
  onChange,
  onBlur,
}: Props) {
  return (
    <div className='flex flex-col items-start gap-5 w-full'>
      <InputField
        label='Name'
        type='text'
        placeholder={data.namePlaceholder}
        value={form.name}
        fieldKey='name'
        touched={!!touched.name}
        error={errors.name}
        onChange={onChange('name')}
        onBlur={() => onBlur('name')}
      />
      <InputField
        label='Email'
        type='email'
        placeholder={data.emailPlaceholder}
        value={form.email}
        fieldKey='email'
        touched={!!touched.email}
        error={errors.email}
        onChange={onChange('email')}
        onBlur={() => onBlur('email')}
      />
      <InputField
        label='Message'
        type='textarea'
        placeholder={data.messagePlaceholder}
        value={form.message}
        fieldKey='message'
        touched={!!touched.message}
        error={errors.message}
        rows={4}
        onChange={onChange('message')}
        onBlur={() => onBlur('message')}
      />
    </div>
  );
}
