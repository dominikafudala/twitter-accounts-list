import Button from "components/Button/Button";
import Title from "components/Title/Title";
import React from "react";
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

const ListItem = ({image, name, description, twitterLink}) => {
    const ImageTag = image ? "img" : "div";
    return(
        <li className={styles.item}>
            <ImageTag src={image} className = {image ? styles.image : styles.imageNone} alt={name} />
            <div className= {styles.info}>
                <Title>{name}</Title>
                <p className={styles.description} >{description.length === 0 || !description ? "There is no description...": description}</p>
                <Button
                href= {twitterLink}
                >
                    Visit Twitter page
                </Button>
            </div>
        </li>
    )
}

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
  };  

export default ListItem;