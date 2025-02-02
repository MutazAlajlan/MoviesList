import React, { Component } from 'react'
import Movie from './Movies'

export default class DisplayMovie extends Component {

    render() {
        const moviesList = [
            {
                title: "Shazam!",
                poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
                overview: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
                release_date: 1553299200,
            },
            {
                title: "Captain Marvel",
                poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
                overview: "The story follows Carol Danvers as she becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
                release_date: 1551830400,
            },
            {
                title: "Escape Room",
                poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
                overview: "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
                release_date: 1546473600,
            },
            {
                title: "How to Train Your Dragon: The Hidden World",
                poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
                overview: "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless' discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup's reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
                release_date: 1546473600,
            },
            {
                title: "Glass",
                poster: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
                overview: "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
                release_date: 1547596800,
            },
            {
                title: "Doraemon the Movie: Nobita's Treasure Island",
                poster: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
                overview: "The story is based on Robert Louis Stevenson's Treasure Island novel.",
                release_date: 1520035200,
            },
            {
                title: "Dumbo",
                poster: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
                overview: "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
                release_date: 1553644800,
            }
        ]
        return (
            <div>
                <Movie movies={moviesList} />
            </div>
        )
    }
}
