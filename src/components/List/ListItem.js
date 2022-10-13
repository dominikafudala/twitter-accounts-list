import Button from "components/Button/Button";
import Title from "components/Title/Title";
import React from "react";
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

const ListItem = ({image, title, description, link, type}) => {
    const ImageTag = image ? "img" : "div";
    return(
        <li className={styles.item}>
            { type ==="twitter" ?
                <ImageTag src={image} className = {image ? styles.image : styles.imageNone} alt={title} /> :
                null
            }
            <div className= {styles.info}>
                <Title>{title}</Title>
                <p className={styles.description} >{description.length === 0 || !description ? "There is no description...": description}</p>
                {
                    type !== "note" ?
                    <Button
                        href= {link}
                        >
                            Visit {type} page
                    </Button>
                    : null
                }
            </div>
        </li>
    )
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  };  

export default ListItem;