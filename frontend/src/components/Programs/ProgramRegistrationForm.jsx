import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Trophy, User, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProgramRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const navigate = useNavigate();
  const { 
    register, 
    control, 
    handleSubmit, 
    watch, 
    trigger,
    formState: { errors } 
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      phoneNumber: '',
      program: '',
      experience: '',
      guardianName: '',
      guardianContact: '',
      preferredTime: ''
    }
  });

  const [formStep, setFormStep] = React.useState(1);
  const age = watch('age');

  const nextStep = async () => {
    const isStepValid = await trigger(['firstName', 'lastName', 'age', 'email']);
    if (isStepValid) {
      setFormStep(2);
    }
  };

  const prevStep = () => {
    setFormStep(1);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormError('');
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) { // 90% success rate for demo
            resolve();
          } else {
            reject(new Error('Network error'));
          }
        }, 2000);
      });

      setFormSuccess(true);
      // Reset form after success
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setFormError(
        error.message === 'Network error'
          ? 'Unable to connect to server. Please try again.'
          : 'Registration failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center py-12 sm:mt-16 mt-20 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-5xl sm:bg-white rounded-2xl sm:p-6 overflow-hidden sm:shadow-md sm:border sm:border-gray-100">
        {/* Header */}
        {/* <div className="bg-gradient-to-r from-wine-700 via-wine-600 to-wine-500 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzM1LjkxIDI0LjE2IDM4IDIyLjkgMzggMjFjMC0xLjY2LTEuMzQtMy0zLTN6bTAgMGMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzM1LjkxIDI0LjE2IDM4IDIyLjkgMzggMjFjMC0xLjY2LTEuMzQtMy0zLTN6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
         
        </div> */}
         <div className="flex items-center space-x-6 mb-6 relative z-10">
            <Trophy className="h-12 w-12 text-wine-700" />
            <div className="space-y-2">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-wine-700/90">Program Registration</h2>
              <p className="text-gray-600 text-lg">Join our karate community today</p>
            </div>
          </div>

        {/* Form Container */}
        <div className="sm:p-8 md:p-12">
          <AnimatePresence>
          {formSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Registration submitted successfully! Redirecting...
            </motion.div>
          )}
        </AnimatePresence>
          <AnimatePresence>
          {formError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center"
            >
              <AlertCircle className="h-5 w-5 mr-2" />
              {formError}
            </motion.div>
          )}
        </AnimatePresence>
          <div className="mb-8">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                <motion.div 
                  className={`flex items-center ${formStep === 1 ? 'text-wine-600' : 'text-gray-400'}`}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${formStep === 1 ? 'border-wine-600 bg-wine-50' : 'border-gray-300'}`}>
                    <User className="w-4 h-4" />
                  </div>
                  <span className="ml-2 font-medium">Personal Info</span>
                </motion.div>
                <div className={`flex-1 h-0.5 mx-4 ${formStep === 2 ? 'bg-wine-600' : 'bg-gray-200'}`} />
                <motion.div 
                  className={`flex items-center ${formStep === 2 ? 'text-wine-600' : 'text-gray-400'}`}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${formStep === 2 ? 'border-wine-600 bg-wine-50' : 'border-gray-300'}`}>
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="ml-2 font-medium">Program Details</span>
                </motion.div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information Section */}
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center text-neutral-800">
                      <User className="mr-3 text-wine-600 h-6 w-6" /> Personal Details
                    </h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide">First Name</label>
                        <input 
                          {...register('firstName', { 
                            required: 'First name is required',
                            minLength: { value: 2, message: 'First name must be at least 2 characters' }
                          })}
                          placeholder="Your first name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-wine-500 focus:ring-2 focus:ring-wine-200 transition-all bg-white/50 hover:bg-white"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input 
                          {...register('lastName', { 
                            required: 'Last name is required',
                            minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                          })}
                          placeholder="Your last name"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Age</label>
                        <input 
                          type="number"
                          {...register('age', { 
                            required: 'Age is required',
                            min: { value: 4, message: 'Minimum age is 4' },
                            max: { value: 80, message: 'Maximum age is 80' }
                          })}
                          placeholder="Your age"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Program Details Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Shield className="mr-2 text-wine-600" /> Program Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Program</label>
                        <Controller
                          name="program"
                          control={control}
                          rules={{ required: 'Program selection is required' }}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                            >
                              <option value="">Select Program</option>
                              <option value="kids">Karate For Kids</option>
                              <option value="women">Women in Karate</option>
                              <option value="adults">Adults Karate Training</option>
                              <option value="schools">Karate for Schools</option>
                            </select>
                          )}
                        />
                        {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Experience Level</label>
                        <Controller
                          name="experience"
                          control={control}
                          rules={{ required: 'Experience level is required' }}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                            >
                              <option value="">Select Experience Level</option>
                              <option value="beginner">Beginner (No Experience)</option>
                              <option value="intermediate">Intermediate (Some Experience)</option>
                              <option value="advanced">Advanced (Experienced)</option>
                            </select>
                          )}
                        />
                        {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Preferred Training Time</label>
                        <Controller
                          name="preferredTime"
                          control={control}
                          rules={{ required: 'Preferred time is required' }}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                            >
                              <option value="">Select Preferred Time</option>
                              <option value="morning">Morning (6:00 AM - 12:00 PM)</option>
                              <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                              <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                            </select>
                          )}
                        />
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="bg-wine-600 text-white px-8 py-3.5 rounded-xl hover:bg-wine-700 transition-all duration-300 flex items-center justify-center ml-auto shadow-lg shadow-wine-600/20 hover:shadow-wine-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Next Step
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>            

                  </motion.div>
                )}
                {formStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-2 text-wine-600" /> Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: { 
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                              message: 'Invalid email address' 
                            }
                          })}
                          placeholder="Your email address"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input 
                          type="tel"
                          {...register('phoneNumber', { 
                            required: 'Phone number is required',
                            pattern: { 
                              value: /^[0-9]{10}$/, 
                              message: 'Please enter a valid 10-digit phone number' 
                            }
                          })}
                          placeholder="Your contact number"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information for Minors */}
                  {Number(age) < 18 && (
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Shield className="mr-2 text-wine-600" /> Guardian Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Guardian Name</label>
                          <input 
                            {...register('guardianName', { 
                              required: Number(age) < 18 ? 'Guardian name is required for minors' : false 
                            })}
                            placeholder="Guardian's full name"
                            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                          />
                          {errors.guardianName && <p className="text-red-500 text-sm mt-1">{errors.guardianName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Guardian Contact</label>
                          <input 
                            type="tel"
                            {...register('guardianContact', { 
                              required: Number(age) < 18 ? 'Guardian contact is required for minors' : false,
                              pattern: { 
                                value: /^[0-9]{10}$/, 
                                message: 'Please enter a valid 10-digit phone number' 
                              }
                            })}
                            placeholder="Guardian's phone number"
                            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wine-500 transition-colors"
                          />
                          {errors.guardianContact && <p className="text-red-500 text-sm mt-1">{errors.guardianContact.message}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.707 5.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L9 8.414V15a1 1 0 102 0V8.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" />
                    </svg>
                    Previous Step
                  </button>
                  <button 
                    type="submit" 
                    className="bg-wine-500 text-white px-8 py-3 rounded-lg hover:bg-wine-600 transition-colors flex items-center"
                  >
                    Submit Registration
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 14.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 12.586V5a1 1 0 10-2 0v7.586l-2.293-2.293a1 1 0 00-1.414 1.414l4 4z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProgramRegistrationForm;