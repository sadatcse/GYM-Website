import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MemberRegisterInput from './components/MemberRegisterInput';
import MemberRegisterSelect from './components/MemberRegisterSelect';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Validation Schema using Yup
const validationSchema = yup.object().shape({
    full_name: yup
        .string()
        .required('Full Name is required')
        .matches(/^[a-zA-Z\s]+$/, 'Full Name must be only letters')
        .min(4, 'Full Name must be at least 4 words'),
    contact_no: yup
        .string()
        .required('Contact Number is required')
        .matches(/^[0-9]+$/, 'Contact Number must be numeric')
        .min(11, 'Contact Number must be at least 11 digits'),
    nid_number: yup
        .string()
        .required('NID is required')
        .matches(/^[0-9]+$/, 'NID must be numeric')
        .min(10, 'NID must be at least 10 digits'),
    address: yup
        .string()
        .required('Address is required')
        // .matches(/^[a-zA-Z\s]+$/, 'Address cannot contain numbers')
        .min(5, 'Address must be at least 5 words'),
    email: yup
        .string()
        .email('Invalid email format')
        .required('Email is required')
        .matches(
            /^(?=.*@(gmail|yahoo|hotmail|outlook)\.com$)/,
            'Use a valid email adress'
        ),
    emergency_contact_number: yup
        .string()
        .matches(/^[0-9]+$/, 'Emergency Contact must be numeric')
        .min(10, 'Emergency Contact Number must be at least 10 digits'),
    fb_id: yup
        .string()
        .matches(/^[a-zA-Z0-9]+$/, 'FB ID must not contain spaces')
        .nullable(),
    profession: yup
        .string()
        .matches(/^[a-zA-Z\s]+$/, 'Profession cannot contain numbers')
        .required('Profession is required'),
    weight: yup
        .number()
        .typeError('Weight must be a number')
        .max(700, 'Weight cannot exceed 700 kg'),
});

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const [age, setAge] = useState('');
    const [memberTypes] = useState(['Monthly', 'Weekly', 'Daily', 'Package']);
    const [bloodGroups] = useState(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
    const navigate = useNavigate();
    const dateOfBirth = watch('date_of_birth');

    useEffect(() => {
        if (dateOfBirth) {
            const calculateAge = (dob) => {
                const birthDate = new Date(dob);
                const difference = Date.now() - birthDate.getTime();
                const ageDate = new Date(difference);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            };
            setAge(calculateAge(dateOfBirth));
        }
    }, [dateOfBirth]);

    const onSubmit = (data) => {
        const signUpUser = async (userData) => {
            try {
                const response = await axios.post('https://multigym-management-server-dmmji.ondigitalocean.app/api/users/signup', userData);
                toast.success('User created successfully');
                navigate("/", { replace: true });
            } catch (error) {
                toast.error(error.response ? error.response.data : 'An error occurred');
            }
        };
        signUpUser(data);
    };

    return (
        <article className="w-full md:p-8 flex items-center justify-center ">
            <form className="w-full max-w-4xl border rounded-xl py-6 px-6 shadow" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <p className="text-2xl text-center px-4 py-2 rounded-xl font-semibold my-4 mt-2 lg:col-span-3 md:col-span-2">
                        Sign Up Now
                    </p>

                    <MemberRegisterInput
                        type="text"
                        label="Full Name"
                        register={register}
                        error={errors}
                        name="full_name"
                        isRequired={true}
                    />

                    <MemberRegisterSelect
                        label="Member Type"
                        register={register}
                        error={errors}
                        name="member_type"
                        isRequired={true}
                    >
                        <option value="">Select Member Type</option>
                        {memberTypes.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </MemberRegisterSelect>

                    <MemberRegisterInput
                        type="text"
                        label="Contact Number"
                        register={register}
                        error={errors}
                        name="contact_no"
                        isRequired={true}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="Nickname"
                        register={register}
                        error={errors}
                        name="nickname"
                        isRequired={false}
                    />

                    <MemberRegisterInput
                        type="date"
                        label="Date of Birth"
                        register={register}
                        error={errors}
                        name="date_of_birth"
                        isRequired={false}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="National ID"
                        register={register}
                        error={errors}
                        name="nid_number"
                        isRequired={true}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="Address"
                        register={register}
                        error={errors}
                        name="address"
                        isRequired={false}
                    />

                    <MemberRegisterSelect
                        label="Marital Status"
                        register={register}
                        error={errors}
                        name="status"
                        isRequired={false}
                    >
                        <option value="">Select Marital Status</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Don't say">Don't Say</option>
                    </MemberRegisterSelect>

                    <MemberRegisterSelect
                        label="Gender"
                        register={register}
                        error={errors}
                        name="gender"
                        isRequired={true}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </MemberRegisterSelect>

                    <MemberRegisterSelect
                        label="Religion"
                        register={register}
                        error={errors}
                        name="religion"
                        isRequired={false}
                    >
                        <option value="">Select Religion</option>
                        <option value="Islam">Islam</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Christian">Christian</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Other">Other</option>
                    </MemberRegisterSelect>

                    <MemberRegisterInput
                        type="email"
                        label="Email"
                        register={register}
                        error={errors}
                        name="email"
                        isRequired={true}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="Emergency Contact Name"
                        register={register}
                        error={errors}
                        name="emergency_contact_name"
                        isRequired={false}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="Emergency Contact Number"
                        register={register}
                        error={errors}
                        name="emergency_contact_number"
                        isRequired={false}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="FB ID"
                        register={register}
                        error={errors}
                        name="fb_id"
                        isRequired={false}
                    />

                    <MemberRegisterSelect
                        label="Blood Group"
                        register={register}
                        error={errors}
                        name="blood_group"
                        isRequired={true}
                    >
                        <option value="">Choose...</option>
                        {bloodGroups.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </MemberRegisterSelect>

                    <MemberRegisterSelect
                        label="Height"
                        register={register}
                        error={errors}
                        name="height"
                        isRequired={false}
                    >
                        <option value="">Select Height</option>
                        {Array.from({ length: 97 }, (_, i) => {
                            const feet = Math.floor(i / 12) + 3;
                            const inches = i % 12;
                            return (
                                <option key={i} value={`${feet} feet ${inches} inches`}>
                                    {feet} feet {inches} inches
                                </option>
                            );
                        })}
                    </MemberRegisterSelect>

                    <MemberRegisterInput
                        type="text"
                        label="Weight (Kg)"
                        register={register}
                        error={errors}
                        name="weight"
                        isRequired={false}
                    />

                    <MemberRegisterInput
                        type="text"
                        label="Profession"
                        register={register}
                        error={errors}
                        name="profession"
                        isRequired={true}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-5 bg-yellow-500 rounded-xl w-full text-white px-4 py-2 btn hover:bg-yellow-600"
                >
                    Sign up
                </button>
            </form>
            <ToastContainer />
        </article>
    );
};

export default Signup;
