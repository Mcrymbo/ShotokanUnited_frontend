import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { 
  AlertCircle, CheckCircle, Upload,
  Building, Users, MapPin, Phone,
  Mail, Globe, Calendar, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import auth from '../../utils/auth';

const AffiliationForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Dojo Information
    dojoName: '',
    establishmentYear: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Kenya',
    website: '',
    email: '',
    phone: '',

    // Head Instructor Information
    instructorName: '',
    instructorRank: '',
    instructorCertifications: '',
    yearsTeaching: '',

    // Training Information
    trainingDays: [],
    trainingTimes: '',
    averageStudents: '',
    activeInstructors: '',

    // Facility Information
    facilitySize: '',
    hasChangingRooms: false,
    hasFirstAid: false,
    hasSafetyEquipment: false,

    // Documents
    dojoRegistration: null,
    instructorCertificates: null,
    insuranceCertificate: null,
    businessRegistration: null,

    // Additional Information
    additionalInfo: '',
    termsAccepted: false
  });

  const trainingDaysOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : 
              value
    }));
  };

  const handleTrainingDays = (day) => {
    setFormData(prev => ({
      ...prev,
      trainingDays: prev.trainingDays.includes(day)
        ? prev.trainingDays.filter(d => d !== day)
        : [...prev.trainingDays, day]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      const formDataToSend = new FormData();
      
      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'dojoRegistration' && 
            key !== 'instructorCertificates' && 
            key !== 'insuranceCertificate' && 
            key !== 'businessRegistration') {
          if (Array.isArray(formData[key])) {
            formDataToSend.append(key, JSON.stringify(formData[key]));
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
      });

      // Append files
      if (formData.dojoRegistration) {
        formDataToSend.append('dojoRegistration', formData.dojoRegistration);
      }
      if (formData.instructorCertificates) {
        formDataToSend.append('instructorCertificates', formData.instructorCertificates);
      }
      if (formData.insuranceCertificate) {
        formDataToSend.append('insuranceCertificate', formData.insuranceCertificate);
      }
      if (formData.businessRegistration) {
        formDataToSend.append('businessRegistration', formData.businessRegistration);
      }

      const response = await auth.post('/api/affiliations/apply', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setFormSuccess(true);
        setTimeout(() => {
          navigate('/affiliation/success');
        }, 3000);
      }
    } catch (error) {
      setFormError(error.response?.data?.message || 'An error occurred while submitting your application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Affiliation Application - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Apply for dojo affiliation with Shotokan United Kenya. Submit your application and required documentation."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-16 bg-wine-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pattern-shuriken pattern-white pattern-bg-transparent 
          pattern-size-4 pattern-opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Affiliation Application
            </h1>
            <p className="text-xl text-white/90">
              Join the Shotokan United Kenya community
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {formError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700">{formError}</p>
            </div>
          )}

          {formSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-700">
                Application submitted successfully! Redirecting...
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Dojo Information */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-wine-700" />
                Dojo Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Dojo Name *
                  </label>
                  <input
                    type="text"
                    name="dojoName"
                    value={formData.dojoName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Establishment Year *
                  </label>
                  <input
                    type="number"
                    name="establishmentYear"
                    value={formData.establishmentYear}
                    onChange={handleInputChange}
                    required
                    min="1950"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>
              </div>
            </section>

            {/* Head Instructor Information */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-wine-700" />
                Head Instructor Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Current Rank *
                  </label>
                  <select
                    name="instructorRank"
                    value={formData.instructorRank}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  >
                    <option value="">Select Rank</option>
                    <option value="1st Dan">1st Dan</option>
                    <option value="2nd Dan">2nd Dan</option>
                    <option value="3rd Dan">3rd Dan</option>
                    <option value="4th Dan">4th Dan</option>
                    <option value="5th Dan">5th Dan</option>
                    <option value="6th Dan">6th Dan</option>
                    <option value="7th Dan">7th Dan</option>
                    <option value="8th Dan">8th Dan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Years Teaching *
                  </label>
                  <input
                    type="number"
                    name="yearsTeaching"
                    value={formData.yearsTeaching}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Additional Certifications
                  </label>
                  <input
                    type="text"
                    name="instructorCertifications"
                    value={formData.instructorCertifications}
                    onChange={handleInputChange}
                    placeholder="e.g., First Aid, Coaching Certificates"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>
              </div>
            </section>

            {/* Training Schedule */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-wine-700" />
                Training Schedule
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Training Days *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {trainingDaysOptions.map(day => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleTrainingDays(day)}
                        className={`px-4 py-2 rounded-lg border ${
                          formData.trainingDays.includes(day)
                            ? 'bg-wine-700 text-white border-wine-700'
                            : 'border-neutral-300 text-neutral-700 hover:border-wine-500'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Training Times *
                  </label>
                  <input
                    type="text"
                    name="trainingTimes"
                    value={formData.trainingTimes}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Mon-Fri: 6-8pm, Sat: 10am-12pm"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Upload className="w-6 h-6 text-wine-700" />
                Required Documents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Dojo Registration *
                  </label>
                  <input
                    type="file"
                    name="dojoRegistration"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Instructor Certificates *
                  </label>
                  <input
                    type="file"
                    name="instructorCertificates"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Insurance Certificate *
                  </label>
                  <input
                    type="file"
                    name="insuranceCertificate"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Business Registration *
                  </label>
                  <input
                    type="file"
                    name="businessRegistration"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  />
                </div>
              </div>
            </section>

            {/* Terms and Submit */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                  <label className="text-sm text-neutral-700">
                    I confirm that all information provided is accurate and complete. 
                    I understand that false information may result in the rejection 
                    of the application or termination of affiliation. I agree to 
                    comply with all HDKI regulations and standards.
                  </label>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.termsAccepted}
                    className={`px-6 py-3 rounded-lg text-white font-medium
                      ${isSubmitting || !formData.termsAccepted
                        ? 'bg-neutral-400 cursor-not-allowed'
                        : 'bg-wine-700 hover:bg-wine-800'
                      }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AffiliationForm;
