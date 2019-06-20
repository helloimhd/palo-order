import React from 'react';
import one from './galleryImages/1.jpg'
import two from './galleryImages/2.jpg'
import three from './galleryImages/3.jpg'
import four from './galleryImages/4.jpg'
import five from './galleryImages/5.jpg'

// show img and select tag
class GalleryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            // array of obj for images so can get ref/img
            images: [
                {ref: 1, img: one},
                {ref: 2, img: two},
                {ref: 3, img: three},
                {ref: 4, img: four},
                {ref: 5, img: five},
            ],

            currentRef: 1,
            currentImg: one
        }

        this.nextPhoto = this.nextPhoto.bind(this);
    }

    nextPhoto(e) {
        // use state to check current ref/photo
        // when click, +1 to currentref so that it increases
        // update current ref state and img so that it will display the updated pic
        const images = this.state.images;
        // so on click i increase the current ref first
        let currentRef = this.state.currentRef;
        let nextRef = currentRef + 1;
        console.log(nextRef)

        if (images.length === nextRef) {
            // go back to the first photo
            this.setState({currentRef: 1, currentImg: one})
        } else {
            // find nextref in the obj
            let newImg = images.find( obj => obj.ref === nextRef );
            console.log(newImg)
            // update state - currentref and currentimg
            this.setState({currentRef: newImg.ref, currentImg: newImg.img})
        }
    }  // end of next photo

    render() {
        return (
            <div className="formContainer">
                <h1>Gallery</h1>

                <div className="photoContainer">
                    <h2>Ref{this.state.currentRef}</h2>
                    <img src={this.state.currentImg} className="img-fluid" />
                </div>

                <button type="button" onClick={this.nextPhoto}>Next</button>

            </div>
        )
    }
}  // end of gallery form

export default GalleryForm;