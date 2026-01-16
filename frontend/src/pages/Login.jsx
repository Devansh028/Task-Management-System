const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                {/*Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Task Manager Login
                </h2>

                {/*Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" placeholder="you@expample.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/*Password */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input type="password" placeholder="........" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/*Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>

                {/*Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">Don't have an account?{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login;