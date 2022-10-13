import React from "react";
import styles from './ListWrapper.module.scss';
import ListItem from "./ListItem";

const ListWrapper = ({items, type}) =>(<>
        { items.length ? 
        <section className={styles.wrapper}>
            <ul className= {styles.accounts}>
            {
                items.map(
                    item => <ListItem
                    key = {item.title}
                    type = {type}
                    {...item}
                    />
                )
            }  
            </ul> 
        </section>
        :
        <div className={styles.noItems}>
            <p className={styles.noItemsInfo}>There are no items, add something new!</p>
        </div>
        }
</>
    )

export default ListWrapper;