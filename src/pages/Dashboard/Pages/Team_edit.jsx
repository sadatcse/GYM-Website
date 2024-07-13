import { useLoaderData } from "react-router-dom";

const Team_edit = () => {
    const {
        Instagram , certification , bio , email , facebook , full_name , image_url,  mobile , position_title, role , short_name, _id
    } = useLoaderData();
    return (
        <div>
            <h1>Team Edit {bio} </h1>
        </div>
    );
};

export default Team_edit;