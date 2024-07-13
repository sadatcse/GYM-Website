import { useLoaderData } from "react-router-dom";

const Testimonial_edit = () => {
    const {comment , image , name , title , _id} = useLoaderData();
    return (
        <div>
            <p>HI {name}</p>
        </div>
    );
};

export default Testimonial_edit;