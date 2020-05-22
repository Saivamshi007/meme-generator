import React,{Component} from 'react'
import catimg from './images/cat.jpg'

class Header extends Component{
    render(){

        var values=[]
        var start=30

        for (let index = 0; index < 90; index+=10) {
            values.push(start+index)
            
        }

       var ans= values.map((elemnts)=>{
       
       return <img style={{width:elemnts}} src={catimg}></img>
    
    })
        

    const imageStyle={
        justifyContent:"center",
        paddingLeft:120
      }
        return(

            <div className="HeaderStyle">

                <h1 style={imageStyle}>MEME GRNERATOR</h1>  

                {ans}




            </div>
            
        )
    }

}

export default Header
