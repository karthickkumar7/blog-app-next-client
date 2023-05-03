import { BaseSyntheticEvent, useState } from 'react';
import axios from 'axios';

const Regsiter = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    });

    const formHandler = (e: BaseSyntheticEvent) => {
        setFormData((pv) => ({
            ...pv,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const { confirm, ...rest } = formData;
        const { data } = await axios.post(
            'http://localhost:5000/auth/register',
            rest
        );
        alert(data.msg);

        setFormData({ email: '', password: '', confirm: '', username: '' });
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Register</h1>
            <form
                className="mt-[50px] flex flex-col space-y-4"
                onSubmit={submitHandler}
            >
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={formHandler}
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={formHandler}
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={formHandler}
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />
                <input
                    name="confirm"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirm}
                    onChange={formHandler}
                    className="outline-none rounded px-4 py-2 border w-[400px] focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="w-[400px] px-4 py-2 rounded bg-blue-600 text-white hover:brightness-110 hover:shadow"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Regsiter;
