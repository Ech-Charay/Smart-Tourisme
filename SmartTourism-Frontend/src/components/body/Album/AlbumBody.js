import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Container, Col,  Row } from 'reactstrap';
import axios from 'axios';

class AlbumBody extends Component {


    constructor(props) {
        super(props);
        this.state = {
            files: [],
            downloads: ""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {

        let UploadedFiles = event.target.files
        this.setState({ files: UploadedFiles })
        
    }

    handleSubmit(e) {

        e.preventDefault()
        this.setState({showHideDemo1 : true})
        let formData = new FormData()

        for (let i = 0; i < this.state.files.length; i++) {
            formData.append('file', this.state.files[i])
        }

        axios.post(
            'http://localhost:8080/album/video',
            formData

        ).then((response) => {
            this.setState({ downloads: response.data })
            console.log(response.data)

        }, (error) => {
            console.log(error);
        })

       



    }

    

    render() {
        return (
            <div className="section section-nucleo-icons">
                <Container>
                    <Row>
                        <Col lg="6" md="12">
                            <h3 className="title">Turn your photos into videos with the easiest online video tool</h3>
                            <h5 className="description">
                                Simply add your photos into our online video creation software and quickly rearrange your pictures to tell your story.
                                Drag and drop your way to a stunning video in minutes. No video editing experience necessary!<br/>
                                            <span style={{color:"red"}}>( only .png format )</span>

                            </h5>

                            <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
                                <input type="file" id="files" multiple name="files" onChange={this.handleChange} />
                                <button type="submit" className="btn btn-info ml-2" > Start Converting </button>
                                <span style={{ color: "#00bcff" , visibility: this.state.showHideDemo1 ? "visible":"hidden" }}><i className="fas fa-sync fa-spin ml-1" ></i></span>

                            </form>
                        </Col>
                        <Col lg="6" md="12">
                            <ReactPlayer
                                playing={true}
                                loop={true}
                                muted={true}

                                controls
                                url="https://www.youtube.com/watch?v=9xTtsV3nWwc"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AlbumBody;

/*

                            />*/

