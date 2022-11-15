import React from "react";
import "./MyList.scss";
const MyList = ({ dataForList }) => {
    return (
        <section className="list-constainer">
            {
                dataForList.map( (itemLi) => {
                    const { first_name, last_name, email, gender, Avatar, social_info } = itemLi
                    return (
                    <article className="article-container">
                        <div>
                            <img src={Avatar} title={first_name} className="avatar" />
                        </div>
                        <div className="info-container">
                            <h2>{first_name}  {last_name}</h2>
                            <h4>{gender}</h4>
                            <h3><a href={`mailto:${email}`}>{email}</a></h3> 
                            <p><strong>Social info:</strong> {social_info}</p>
                        </div>
                    </article>
                    )
                } )
            }
        </section>
    )
};

export default MyList;