
const ErrorPage = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src="" alt="Error" className="w-64 h-64 mb-6" />
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-4">We apologize for the inconvenience.</p>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={refreshPage}
                >
                    Refresh
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
                    onClick={goBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;