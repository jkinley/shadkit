import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { Label } from '@/registry/ui/label';
import { Textarea } from '@/registry/ui/textarea';
import { Input } from '@/registry/ui/input';
import { useSaveUser } from './-hooks/use-save-user';

const userSchema = z.object({
  firstName: z.string().min(5, {
    message: 'First name cannot be less than 5 letters'
  }),
  lastName: z.string().min(3, 'Last name must be at least 3 characters')
});

type User = z.infer<typeof userSchema>;

function BasicForm() {
  const [lastSubmittedValues, setLastSubmittedValues] = useState({
    firstName: '',
    lastName: ''
  });
  const [isDirty, setIsDirty] = useState(false);

  const saveUserMutation = useSaveUser();

  const form = useForm({
    defaultValues: lastSubmittedValues,
    onSubmit: async ({ value }) => {
      setIsDirty(false);
      setLastSubmittedValues(value);
      saveUserMutation.mutate(value, {
        onSuccess: (data) => {
          console.log('User saved with ID:', data.id);
          alert('User created successfully!');
        },
        onError: (error) => {
          console.error('Save failed:', error.message);
          alert('Failed to create user.');
        }
      });
    },
    validators: {
      onChange: userSchema
    }
  });

  const checkDirtyState = (values: User) => {
    const currentValues = JSON.stringify(values);
    const lastSubmittedValuesStr = JSON.stringify(lastSubmittedValues);
    setIsDirty(currentValues !== lastSubmittedValuesStr);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200 transition-all duration-300">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">TanStack Zod Form with Validations</h1>

        <div className="space-y-4">
          {/* First Name Field */}
          <form.Field name="firstName" validators={{ onChangeAsyncDebounceMs: 500 }}>
            {(field) => (
              <div className="relative group">
                <FormField
                  id="firstName"
                  label="First Name"
                  field={field}
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  onChange={() => checkDirtyState(form.state.values)}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></span>
              </div>
            )}
          </form.Field>

          {/* Last Name Field */}
          <form.Field name="lastName" validators={{ onChangeAsyncDebounceMs: 500 }}>
            {(field) => (
              <div className="relative group">
                <FormField
                  id="lastName"
                  label="Last Name"
                  field={field}
                  type="text"
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  onChange={() => checkDirtyState(form.state.values)}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></span>
              </div>
            )}
          </form.Field>
        </div>

        {/* Submit Button */}
        <form.Subscribe selector={(state) => [state.canSubmit, state.isValidating]}>
          {([canSubmit, isValidating]) => (
            <button
              type="submit"
              disabled={!canSubmit || isValidating || !isDirty || saveUserMutation.isPending}
              onClick={form.handleSubmit}
              className={`w-full mt-4 py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                canSubmit && isDirty && !saveUserMutation.isPending
                  ? 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {saveUserMutation.isPending ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </form.Subscribe>
      </div>
    </div>
  );
}

export default BasicForm;

// When installed in user projects, uncomment this:
// export const Route = createFileRoute('/basic-form/')({
//   component: BasicForm
// });

interface FormFieldProps {
  id: string;
  label: string;
  field: any;
  type?: 'text' | 'textarea';
  placeholder?: string;
  className: string;
  onChange?: () => void;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  field,
  type = 'text',
  placeholder = '',
  onChange,
  className = ''
}) => {
  const FieldComponent = type === 'textarea' ? Textarea : Input;

  const handleChange = (value: string) => {
    field.handleChange(value);
    onChange?.();
  };

  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium mb-2 block">
        {label}
      </Label>
      <FieldComponent
        id={id}
        value={field.state.value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
      {field.state.meta.errors?.length > 0 && (
        <ul className="text-destructive text-sm mt-1 space-y-1">
          {field.state.meta.errors.map((err: any, index: number) => (
            <li key={index}>{typeof err === 'string' ? err : err.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
