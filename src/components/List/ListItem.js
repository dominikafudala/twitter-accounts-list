import Button from "components/Button/Button";
import Title from "components/Title/Title";
import React from "react";
import styles from './ListItem.module.scss';


const ListItem = ({image, name, description, twitterLink}) => {
    const ImageTag = image ? "img" : "div";
    return(
        <li className={styles.item}>
            <ImageTag src={image} className = {image ? styles.image : styles.imageNone} alt={name} />
            <div className= {styles.info}>
                <Title>{name}</Title>
                <p className={styles.description} >{description}</p>
                <Button
                href= {twitterLink}
                >
                    visit twitter page
                </Button>
            </div>
        </li>
    )
}

export default ListItem;