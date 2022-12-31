import React, { Component } from 'react'

export default class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div >
                {monsters.map((monster) => {
                    return <h1 key={monster.id}>{monster.name}</h1>
                })}
            </div >
        )
    }
}