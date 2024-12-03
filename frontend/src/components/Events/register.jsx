import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Trophy, User, Shield } from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';

const KarateRegistrationForm = () => {
  const { 
    register, 
    control, 
    handleSubmit, 
    watch, 
    trigger,
    formState: { errors } 
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      weight: '',
      gender: '',
      club: '',
      guardianName: '',
      guardianContact: '',
      email: '',
      phoneNumber: '',
      belt: ''
    }
  });

  const [formStep, setFormStep] = React.useState(1);
  const age = watch('age');

  const nextStep = async () => {
    const isStepValid = await trigger(['firstName', 'lastName', 'age', 'weight', 'gender']);
    if (isStepValid) {
      setFormStep(2);
    }
  };

  const prevStep = () => {
    setFormStep(1);
  };

  const onSubmit = (data) => {
    console.log('Registration Data:', data);
    alert('Registration Submitted Successfully!');
  };

  return (
    <DefaultLayout>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Trophy className="h-10 w-10 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold">Karate Championship Registration</h2>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-6 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {formStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-2 text-orange-600" /> Personal Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">First Name</label>
                        <input 
                          {...register('firstName', { 
                            required: 'First name is required',
                            minLength: { value: 2, message: 'First name must be at least 2 characters' }
                          })}
                          placeholder="Your first name"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input 
                          {...register('lastName', { 
                            required: 'Last name is required',
                            minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                          })}
                          placeholder="Your last name"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Details Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Shield className="mr-2 text-orange-600" /> Championship Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Age</label>
                        <input 
                          type="number"
                          {...register('age', { 
                            required: 'Age is required',
                            min: { value: 6, message: 'Minimum age is 6' },
                            max: { value: 60, message: 'Maximum age is 60' }
                          })}
                          placeholder="Your age"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Weight (kg)</label>
                        <input 
                          type="number"
                          {...register('weight', { 
                            required: 'Weight is required',
                            min: { value: 20, message: 'Minimum weight is 20 kg' },
                            max: { value: 150, message: 'Maximum weight is 150 kg' }
                          })}
                          placeholder="Your weight"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Gender</label>
                        <Controller
                          name="gender"
                          control={control}
                          rules={{ required: 'Gender is required' }}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          )}
                        />
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center ml-auto"
                  >
                    Next Step
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Club and Belt Details */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Shield className="mr-2 text-orange-600" /> Club Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Karate Club</label>
                        <input 
                          {...register('club', { required: 'Karate club is required' })}
                          placeholder="Your karate club"
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.club && <p className="text-red-500 text-sm mt-1">{errors.club.message}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Belt Level</label>
                        <Controller
                          name="belt"
                          control={control}
                          rules={{ required: 'Belt level is required' }}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            >
                              <option value="">Select Belt</option>
                              <option value="white">White</option>
                              <option value="yellow">Yellow</option>
                              <option value="orange">Orange</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                              <option value="brown">Brown</option>
                              <option value="black">Black</option>
                            </select>
                          )}
                        />
                        {errors.belt && <p className="text-red-500 text-sm mt-1">{errors.belt.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-2 text-orange-600" /> Contact Information
                    </h3>
                    <div className="space-y-4">
                      {Number(age) < 18 && (
                        <>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Guardian Name</label>
                            <input 
                              {...register('guardianName', { 
                                required: Number(age) < 18 ? 'Guardian name is required for minors' : false 
                              })}
                              placeholder="Guardian's full name"
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
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
                              className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            />
                            {errors.guardianContact && <p className="text-red-500 text-sm mt-1">{errors.guardianContact.message}</p>}
                          </div>
                        </>
                      )}
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
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
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
                          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                      </div>
                    </div>
                  </div>
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
                     className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                   >
                     Submit Registration
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M10.293 14.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 12.586V5a1 1 0 10-2 0v7.586l-2.293-2.293a1 1 0 00-1.414 1.414l4 4z" clipRule="evenodd" />
                     </svg>
                   </button>
                 </div>
               </div>
             )}
           </form>
         </div>
       </div>
     </div>
    </DefaultLayout>
   );
 };
 
 export default KarateRegistrationForm;