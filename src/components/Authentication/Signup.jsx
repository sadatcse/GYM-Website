import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MemberRegisterInput from './components/MemberRegisterInput';
import MemberRegisterSelect from './components/MemberRegisterSelect';
import axios from 'axios';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [age, setAge] = useState('');
    const [memberTypes] = useState(['Monthly', 'Weekly', 'Daily', "Package"]);
    const [bloodGroups] = useState(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);

    // Watch date of birth to calculate age
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

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data)
        const signUpUser = async (userData) => {
            try {
                console.log(userData)
                const response = await axios.post('http://localhost:8000/api/users/signup', userData);
                alert("done")
                console.log('User created successfully:', response.data);
            } catch (error) {
                // Handle any errors
                alert("error")
                console.log(error)
                console.error('Error signing up the user:', error.response ? error.response.data : error.message);
            }
        };
        signUpUser(data);

    };
    return (
        <article className="w-full md:p-8 flex items-center justify-center ">
            <form className="w-full max-w-4xl border  rounded-xl py-6 px-6  shadow" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Personal Information Section */}
                    <p className="text-2xl  text-center px-4 py-2 rounded-xl font-semibold my-4 mt-2 lg:col-span-3  md:col-span-2">
                        Sign Up Now
                    </p>

                    <MemberRegisterInput
                        type="text"
                        register={register}
                        error={errors}
                        name="full_name"
                        isRequired={true}
                        label="Full Name"
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
                        register={register}
                        error={errors}
                        name="nickname"
                        isRequired={false}
                        label="Nickname"
                    />

                    <MemberRegisterInput
                        type="date"
                        label="Date Of Birth "
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
                        label="Gender "
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
                        label="Blood Group "
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

                    {/* <MemberRegisterInput
                        type="text"
                        label="Age"
                        value={age || ""}
                        isRequired={false}
                        readOnly={true}
                    /> */}

                    {/* Height in Feet */}
                    <MemberRegisterSelect
                        label="Height"
                        register={register}
                        error={errors}
                        name="height"
                        isRequired={false}
                    >
                        <option value="">Select Height</option>
                        {Array.from({ length: 97 }, (_, i) => {
                            if (i < 36) {
                                const feet = 3; // start from 3 feet
                                const inches = i; // increments of inches
                                return (
                                    <option key={i} value={`${feet} feet ${inches}`}>
                                        {feet} feet {inches}
                                    </option>
                                );
                            } else if (i >= 36 && i <= 95) {
                                const feet = Math.floor(i / 12) + 3; // convert to feet starting from 3
                                const inches = i % 12;
                                return (
                                    <option key={i} value={`${feet} feet ${inches}`}>
                                        {feet} feet {inches}
                                    </option>
                                );
                            }
                            return null;
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

                    {/* Profession as a text input */}
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
        </article>
    );
};

export default Signup;
