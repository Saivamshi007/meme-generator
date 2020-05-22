import React,{Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            top_text:"",
            bottom_text:'',
            randomImg:"https://i.imgflip.com/26am.jpg",
            allMeme:[]

        }
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMeme: memes })
            })
    }

    handleChange(){
        const {name,value}=event.target
        this.setState({
            [name]:value

        })
    }
    handleClick=(event)=>{
        event.preventDefault()

        const randomnum=Math.floor(Math.random()*this.state.allMeme.length )
        const randomMeme=this.state.allMeme[randomnum].url 
        this.setState({randomImg:randomMeme})




    }
    render(){
        const inputStyle={
            padding:10,
            border:"1px solid red",
            margin:"5px"
        }
        return(
            <div style={{paddingLeft:140}}>
                <h2>Meme selector</h2>
                <form className="meme-form" onSubmit={this.handleClick}>
                    <input
                    style={inputStyle}
                    name='top_text'
                    type="text"
                    placeholder="Top Text"
                    value={this.state.top_text}
                    onChange={this.handleChange}
                    
                    />
                    <input
                    style={inputStyle}
                    name='bottom_text'
                    type="text"
                    placeholder="Bottom Text"
                    value={this.state.bottom_text}
                    onChange={this.handleChange}
                    />
                   
                    <button>gen</button>




                </form>
                <div className="meme">
                    <img src={this.state.randomImg}></img>
                    <h2 className="top">{this.state.top_text}</h2>
                    <h2 className="bottom">{this.state.bottom_text}</h2>
                </div>
            </div>
            

        )
    }
}

export default MemeGenerator
