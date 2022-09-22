import React from "react";
import { twitterAccounts } from "data/twitterAccounts";
import styles from './ListWrapper.module.scss';
import ListItem from "./ListItem";

const ListWrapper = () =>(
        <section className={styles.wrapper}>
            <ul className= {styles.accounts}>
            {
                twitterAccounts.map(
                    item => <ListItem
                    key = {item.name}
                    {...item}
                    />
                )
            }  
            </ul> 
        </section>
    )

export default ListWrapper;