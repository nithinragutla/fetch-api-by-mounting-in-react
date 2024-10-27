import { Component } from "react";

class Fetch extends Component{
    constructor(){
         super();
         this.state={
            api:[],
            flitereddata:[]
         }

    }


    componentDidMount(){
        fetch("https://fakestoreapi.com/products").then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({
                api:res
            })
            
        })
    }

    Men=()=>{
        var a=this.state.api.filter((item)=>{
            return item.category==="men's clothing"
        })
        this.setState({
            flitereddata:a
        })
    }
    Women=()=>{
        var a=this.state.api.filter((item)=>{
            return item.category==="women's clothing"
        })
        this.setState({
            flitereddata:a
        })
    }
    Jewellery=()=>{
        var a=this.state.api.filter((item)=>{
            return item.category==="jewelery"
        })
        this.setState({
            flitereddata:a
        })
    }
    electronics=()=>{
        var a=this.state.api.filter((item)=>{
            return item.category==="electronics"
        })
        this.setState({
            flitereddata:a
        })
    }

    render(){
             var ab=this.state.flitereddata.map((val,ind,arr)=>{

                return (
                    <>
                    
            <tr>
<td>{val["title"]}</td>
<td><img src={val["image"]} alt="img" width={200} /></td>
<td>{val["price"]}</td>
<td>{val["description"]}</td>
</tr>

                </>
                )

             })
        
        return(
            <>
            <table border={2}>
            <button onClick={this.Men}>men</button>
            <button onClick={this.Women}>women</button>
            <button onClick={this.Jewellery}>jewellery</button>
            <button onClick={this.electronics}>electronics</button>
            <div>{ab}</div>
        
            </table>
            </>
        )
    }
}
export default Fetch;