import React, { useEffect } from "react";

/* Components */
import Placeholder from "../Placeholder";
import MembersCard from "../MembersCard";
import { Header } from "semantic-ui-react";

/* Containers */
import Layout from "../../containers/Layout";

/* Style */
import "./iusersPage.scss";

const IusersPage = (props) => {
    const {
        allUsersList,
        isLoadingallUsers,
        fetchAllUsers,
    } = props;

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <Layout>
            <div className="usersPage">
                <Header size="small" content="Les dernier utilisateurs" className="title"/>
                <div className="users-list">
                    {isLoadingallUsers && <Placeholder />}
                    {!isLoadingallUsers &&
                        allUsersList.map((element) => (
                            <MembersCard user={element} key={element.id} />
                        ))}
                </div>
            </div>
        </Layout>
    );
};

export default IusersPage;
