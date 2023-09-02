import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const signleToy = useLoaderData()
    return (
        <div>
            <h1>This is the information of {signleToy.name}</h1>
        </div>
    );
};

export default SingleToy;