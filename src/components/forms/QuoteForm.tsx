import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { shipmentService } from '@/services/api';
import { toast } from 'react-hot-toast';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  fromLocation: z.string().min(2, 'From location is required'),
  toLocation: z.string().min(2, 'To location is required'),
  cargoType: z.string().min(2, 'Cargo type is required'),
  weight: z.number().min(0, 'Weight must be positive'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      await shipmentService.requestQuote(data);
      toast.success('Quote request submitted successfully!');
      reset();
    } catch (error) {
      console.error('Quote submission error:', error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        {/* Add other form fields */}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full"
      >
        {isSubmitting ? 'Submitting...' : 'Get Quote'}
      </Button>
    </motion.form>
  );
}; 