
const ErrorPage = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div data-aos="fade-down" className="min-h-screen flex flex-col justify-center items-center">
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="Error" className="w-64 h-64 mb-6" />
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-4">We apologize for the inconvenience.</p>
            <div className="flex space-x-4">
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={refreshPage}
                >
                    Refresh
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-5 py-2 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
                    onClick={goBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;